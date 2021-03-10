FROM mongo

COPY counties.json /counties.json
CMD mongoimport --host mongo --db reach-engine --collection users --type json --file /counties.json --jsonArray

