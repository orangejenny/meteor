# Generate mongo statements to create some test data, where input is the json rows dumped from
# select * from days, workouts where days.id = workouts.day_id
# Usage: seed.py <file>

import json
import sys

f = open(sys.argv[1])
data = json.load(f)['data']

days = {}
for row in data:
	if row['day'] not in days:
		days[row['day']] = {
			'day': row['day'],
			'notes': row['notes'],
			'workouts': [],
		}
	workout = {}
	for attr in ("activity", "time", "distance", "sets", "reps", "weight", "unit"):
		if row[attr]:
			workout[attr] = row[attr]
	days[row['day']]['workouts'].append(workout);

f.close()

print "db.days.remove({})";
for day in days.values():
	print "db.days.insert(%s)" % json.dumps(day)
