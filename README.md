# cowin-checker

## Initial setup

First install dependencies using

`npm install`

Then open the `config.js` file and modify the locations array as per your requirements. For the `type` field, you can use "district" or "pincode" as shown below. Give a suitable title to identify in the output.

```
locations: [
    {
      type: "district",
      districtId: 304,
      title: "Kottayam, Kerala",
    },
    {
      type: "pincode",
      pincode: 382475,
      title: "Hansol (382475)",
    },
  ]
```

## Running

Run the script using `node index.js`.
