const locations = [
    {
        "name": "国会議事堂",
        "address": "東京千代田区"
    },
    {
        "name": "札幌時計台",
        "address": "札幌"
    },
    {
        "name": "首里城",
        "address": "那覇"
    }
];

for (let i = 0; i < locations.length; i++){
    document.write(locations[i].name + '/'
        + locations[i].address + '<br>');
}
