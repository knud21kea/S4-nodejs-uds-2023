const rocks = [
    { name: "Pet rock", age: 2},
    { name: "Led Zeppelin" , age: 50},
    { name: "Dwayne Johnson", age: 47 },
    { name: "Neptune", age: 100_000 }]

    //console.log(rocks);

    // loop methods: map, filter, find, reduce, sort,forEach

    //console.log( {...rocks[0]});

    // assignment make all the rocks one year older and save the value to rocksAgedOneYear
    

    const rocksAgedOneYear = rocks.map(rock => {        
        return { name: rock.name, age: rock.age +1};
        // return { ...rock, age: rock.age+1}; spread function ??
    });

    

    //console.log(rocksAgedOneYear);

    // assignment give me the rocks that have even ages

    const evenAgedRocks = rocks.filter(rock => (rock.age  %2 === 0));
    console.log(evenAgedRocks);

