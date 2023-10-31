// Define the number of records to generate
const numRecords = 10;

// Define the range of possible values for each field
const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"];
const ages = Array.from({ length: 100 }, (_, i) => i + 1);
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];

// Generate the random data
const data = [];
for (let i = 0; i < numRecords; i++) {
    const record = {
        name: names[Math.floor(Math.random() * names.length)],
        age: ages[Math.floor(Math.random() * ages.length)],
        city: cities[Math.floor(Math.random() * cities.length)]
    };
    data.push(record);
}

// Output the data as JSON
console.log(JSON.stringify(data));
