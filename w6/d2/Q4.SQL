SELECT name FROM reviewer
LEFT JOIN rating ON rating.rid = reviewer.rid
WHERE ratingdate IS NULL;