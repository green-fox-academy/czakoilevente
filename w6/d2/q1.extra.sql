SELECT DISTINCT name FROM reviewer
LEFT JOIN rating ON rating.rid = reviewer.rid
LEFT JOIN movie ON movie.mid = rating.mid
WHERE movie.mid = 101 and stars IS NOT NULL;