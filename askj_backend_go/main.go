package main

import (
	"strconv"
	"net/http"
	"time"
	"math/rand"
	"database/sql"

	_"github.com/mattn/go-sqlite3"
	
  "github.com/gin-gonic/gin"
)

func main() {
	// Set the router as the default one shipped with Gin
  router := gin.Default()

	// Setup route group for the API
  api := router.Group("/api")
  {
    api.GET("/", func(c *gin.Context) {
      c.JSON(http.StatusOK, gin.H {
        "message": "pong",
      })
    })
	}
	
	api.GET("/verses", getBibleRow)

	// Start and run the server
  router.Run(":8081")
}

func checkErr(err error) {
		if err != nil {
				panic(err)
		}
}

func getBibleRow(c *gin.Context) {
	rand.Seed(time.Now().UTC().UnixNano())
	db, err := sql.Open("sqlite3", "./db/development.sqlite3")
	checkErr(err)

	query, err := db.Prepare("SELECT COUNT(*) as count FROM bibles")
	checkErr(err)

	defer query.Close()

	var rows string
	err = query.QueryRow().Scan(&rows)

	rowsInt, err := strconv.Atoi(rows)
	randRow := rand.Intn(rowsInt)
	checkErr(err)

	row := db.QueryRow("SELECT verse_text FROM bibles where id=$1",randRow)

	var verseText string
	row.Scan(&verseText)
	db.Close()

	stripVerse := trimQuotes(verseText)

	c.Header("Content-Type", "application/json")
	c.JSON(http.StatusOK, gin.H{"verse_text": stripVerse})
}

func trimQuotes(s string) string {
	if len(s) >= 2 {
		if c := s[len(s)-1]; s[0] == c && (c == '"' || c == '\'') {
				return s[1 : len(s)-1]
		}
	}
	return s
}