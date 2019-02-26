SELECT DISTINCT year FROM movie
LEFT JOIN rating ON movie.mid = rating.mid
WHERE rating.stars >= 4
ORDER BY year ASC;