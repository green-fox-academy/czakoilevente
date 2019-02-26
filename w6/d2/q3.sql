SELECT title FROM movie
LEFT JOIN rating ON movie.mid = rating.mid
WHERE stars IS NULL;
