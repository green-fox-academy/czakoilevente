SELECT name, title, stars FROM reviewer
LEFT JOIN rating ON rating.rid = reviewer.rid 
LEFT JOIN movie ON rating.mid = movie.mid
WHERE director = reviewer.rid;






