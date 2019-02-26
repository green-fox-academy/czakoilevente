SELECT name, title, stars, ratingdate FROM rating
LEFT JOIN reviewer ON reviewer.rid = rating.rid
LEFT JOIN movie ON movie.mid = rating.mid
ORDER BY name, title, stars;