function yearList() {
    selectedYear = document.querySelector('.years') 
    for(let i = 1950; i<2022; i++){ 
        option = document.createElement("option") 
        option.value = i 
        option.text = i 
        selectedYear.appendChild(option) 
    }
} yearList()

f1Champions = {
    champion: [
        {
            "year": 1950,
            "name": "Nino Farina",
            "team": "Alfa Romeo",
            "photoURL": "images/champions/nino-farina.png"
        },
        {
            "year": 1951,
            "name": "Juan Manuel Fangio",
            "team": "Alfa Romeo",
            "photoURL": "images/champions/juan-manuel-fangio.png"
        },
        {
            "year": 1952,
            "name": "Alberto Ascari",
            "team": "Ferrari",
            "photoURL": "images/champions/alberto-ascari.png"
        },
        {
            "year": 1953,
            "name": "Alberto Ascari",
            "team": "Ferrari",
            "photoURL": "images/champions/alberto-ascari.png"
        },
        {
            "year": 1954,
            "name": "Juan Manuel Fangio",
            "team": "Maserati/Mercedes",
            "photoURL": "images/champions/juan-manuel-fangio.png"
        },
        {
            "year": 1955,
            "name": "Juan Manuel Fangio",
            "team": "Mercedes",
            "photoURL": "images/champions/juan-manuel-fangio.png"
        },
        {
            "year": 1956,
            "name": "Juan Manuel Fangio",
            "team": "Ferrari",
            "photoURL": "images/champions/juan-manuel-fangio.png"
        },
        {
            "year": 1957,
            "name": "Juan Manuel Fangio",
            "team": "Maserati",
            "photoURL": "images/champions/juan-manuel-fangio.png"
        },
        {
            "year": 1958,
            "name": "Mike Hawthorn",
            "team": "Ferrari",
            "photoURL": "images/champions/mike-hawthorn.png"
        },
        {
            "year": 1959,
            "name": "Jack Brabham",
            "team": "Cooper",
            "photoURL": "images/champions/jack-brabham.png"
        },
        {
            "year": 1960,
            "name": "Jack Brabham",
            "team": "Cooper",
            "photoURL": "images/champions/jack-brabham.png"
        },
        {
            "year": 1961,
            "name": "Phil Hill",
            "team": "Ferrari",
            "photoURL": "images/champions/phil-hill.png"
        },
        {
            "year": 1962,
            "name": "Graham Hill",
            "team": "BRM",
            "photoURL": "images/champions/graham-hill.png"
        },
        {
            "year": 1963,
            "name": "Jim Clark",
            "team": "Lotus",
            "photoURL": "images/champions/jim-clark.png"
        },
        {
            "year": 1964,
            "name": "John Surtees",
            "team": "Ferrari",
            "photoURL": "images/champions/john-surtees.png"
        },
        {
            "year": 1965,
            "name": "Jim Clark",
            "team": "Lotum",
            "fotoURL": "images/champions/jim-clark.png"
        },
        {
            "year": 1966,
            "name": "Jack Brabham",
            "team": "Brabham",
            "photoURL": "images/champions/jack-brabham.png"
        },
        {
            "year": 1967,
            "name": "Denny Hulme",
            "team": "Brabham",
            "photoURL": "images/champions/denny-hulme.png"
        },
        {
            "year": 1968,
            "name": "Graham Hill",
            "team": "Lotus",
            "photoURL": "images/champions/graham-hill.png"
        },
        {
            "year": 1969,
            "name": "Jackie Stewart",
            "team": "Matra",
            "photoURL": "images/champions/jackie-stewart.png"
        },
        {
            "year": 1970,
            "name": "Jochen Rindt",
            "team": "Lotus",
            "photoURL": "images/champions/jochen-rindt.png"
        },
        {
            "year": 1971,
            "name": "Jackie Stewart",
            "team": "Tyrrell",
            "photoURL": "images/champions/jackie-stewart.png"
        },
        {
            "year": 1972,
            "name": "Emerson Fittipaldi",
            "team": "Lotus",
            "photoURL": "images/champions/emerson-fittipaldi.png"
        },
        {
            "year": 1973,
            "name": "Jackie Stewart",
            "team": "Tyrrell",
            "photoURL": "images/champions/jackie-stewart.png"
        },
        {
            "year": 1974,
            "name": "Emerson Fittipaldi",
            "team": "McLaren",
            "photoURL": "images/champions/emerson-fittipaldi.png"
        },
        {
            "year": 1975,
            "name": "Niki Lauda",
            "team": "Ferrari",
            "photoURL": "images/champions/niki-lauda.png"
        },
        {
            "year": 1976,
            "name": "James Hunt",
            "team": "McLaren",
            "photoURL": "images/champions/james-hunt.png"
        },
        {
            "year": 1977,
            "name": "Niki Lauda",
            "team": "Ferrari",
            "photoURL": "images/champions/niki-lauda.png"
        },
        {
            "year": 1978,
            "name": "Mario Andretti",
            "team": "Lotus",
            "photoURL": "images/champions/mario-andretti.png"
        },
        {
            "year": 1979,
            "name": "Jody Scheckter",
            "team": "Ferrari",
            "photoURL": "images/champions/jody-scheckter.png"
        },
        {
            "year": 1980,
            "name": "Alan Jones",
            "team": "Williams",
            "photoURL": "images/champions/alan-jones.png"
        },
        {
            "year": 1981,
            "name": "Nelson Piquet",
            "team": "Brabham",
            "photoURL": "images/champions/nelson-piquet.png"
        },
        {
            "year": 1982,
            "name": "Keke Rosberg",
            "team": "Williams",
            "photoURL": "images/champions/keke-rosberg.png"
        },
        {
            "year": 1983,
            "name": "Nelson Piquet",
            "team": "Brabham",
            "photoURL": "images/champions/nelson-piquet.png"
        },
        {
            "year": 1984,
            "name": "Niki Lauda",
            "team": "McLaren",
            "photoURL": "images/champions/niki-lauda.png"
        },
        {
            "year": 1985,
            "name": "Alain Prost",
            "team": "McLaren",
            "photoURL": "images/champions/alain-prost.png"
        },
        {
            "year": 1986,
            "name": "Alain Prost",
            "team": "McLaren",
            "photoURL": "images/champions/alain-prost.png"
        },
        {
            "year": 1987,
            "name": "Nelson Piquet",
            "team": "Williams",
            "photoURL": "images/champions/nelson-piquet.png"
        },
        {
            "year": 1988,
            "name": "Ayrton Senna",
            "team": "McLaren",
            "photoURL": "images/champions/ayrton-senna.png"
        },
        {
            "year": 1989,
            "name": "Alain Prost",
            "team": "McLaren",
            "photoURL": "images/champions/alain-prost.png"
        },
        {
            "year": 1990,
            "name": "Ayrton Senna",
            "team": "McLaren",
            "photoURL": "images/champions/ayrton-senna.png"
        },
        {
            "year": 1991,
            "name": "Ayrton Senna",
            "team": "McLaren",
            "photoURL": "images/champions/ayrton-senna.png"
        },
        {
            "year": 1992,
            "name": "Nigel Mansell",
            "team": "Williams",
            "photoURL": "images/champions/nigel-mansell.png"
        },
        {
            "year": 1993,
            "name": "Alain Prost",
            "team": "Williams",
            "photoURL": "images/champions/alain-prost.png"
        },
        {
            "year": 1994,
            "name": "Michael Schumacher",
            "team": "Benetton",
            "photoURL": "images/champions/michael-schumacher.png"
        },
        {
            "year": 1995,
            "name": "Michael Schumacher",
            "team": "Benetton",
            "photoURL": "images/champions/michael-schumacher.png"
        },
        {
            "year": 1996,
            "name": "Damon Hill",
            "team": "Williams",
            "photoURL": "images/champions/damon-hill.png"
        },
        {
            "year": 1997,
            "name": "Jacques Villeneuve",
            "team": "Williams",
            "photoURL": "images/champions/jacques-villeneuve.png"
        },
        {
            "year": 1998,
            "name": "Mika Häkkinen",
            "team": "McLaren",
            "photoURL": "images/champions/mika-hakkinen.png"
        },
        {
            "year": 1999,
            "name": "Mika Häkkinen",
            "team": "McLaren",
            "photoURL": "images/champions/mika-hakkinen.png"
        },
        {
            "year": 2000,
            "name": "Michael Schumacher",
            "team": "Ferrari",
            "photoURL": "images/champions/michael-schumacher.png"
        },
        {
            "year": 2001,
            "name": "Michael Schumacher",
            "team": "Ferrari",
            "photoURL": "images/champions/michael-schumacher.png"
        },
        {
            "year": 2002,
            "name": "Michael Schumacher",
            "team": "Ferrari",
            "photoURL": "images/champions/michael-schumacher.png"
        },
        {
            "year": 2003,
            "name": "Michael Schumacher",
            "team": "Ferrari",
            "photoURL": "images/champions/michael-schumacher.png"
        },
        {
            "year": 2004,
            "name": "Michael Schumacher",
            "team": "Ferrari",
            "photoURL": "images/champions/michael-schumacher.png"
        },
        {
            "year": 2005,
            "name": "Fernando Alonso",
            "team": "Renault",
            "photoURL": "images/champions/fernando-alonso.png"
        },
        {
            "year": 2006,
            "name": "Fernando Alonso",
            "team": "Renault",
            "photoURL": "images/champions/fernando-alonso.png"
        },
        {
            "year": 2007,
            "name": "Kimi Räikkönen",
            "team": "Renault",
            "photoURL": "images/champions/kimi-raikkonen.png"
        },
        {
            "year": 2008,
            "name": "Lewis Hamilton",
            "team": "McLaren",
            "photoURL": "images/champions/lewis-hamilton.png"
        },
        {
            "year": 2009,
            "name": "Jenson Button",
            "team": "Brown",
            "photoURL": "images/champions/jenson-button.png"
        },
        {
            "year": 2010,
            "name": "Sebastian Vettel",
            "team": "Red Bull",
            "photoURL": "images/champions/sebastian-vettel.png"
        },
        {
            "year": 2011,
            "name": "Sebastian Vettel",
            "team": "Red Bull",
            "photoURL": "images/champions/sebastian-vettel.png"
        },
        {
            "year": 2012,
            "name": "Sebastian Vettel",
            "team": "Red Bull",
            "photoURL": "images/champions/sebastian-vettel.png"
        },
        {
            "year": 2013,
            "name": "Sebastian Vettel",
            "team": "Red Bull",
            "photoURL": "images/champions/sebastian-vettel.png"
        },
        {
            "year": 2014,
            "name": "Lewis Hamilton",
            "team": "Mercedes",
            "photoURL": "images/champions/lewis-hamilton.png"
        },
        {
            "year": 2015,
            "name": "Lewis Hamilton",
            "team": "Mercedes",
            "photoURL": "images/champions/lewis-hamilton.png"
        },
        {
            "year": 2016,
            "name": "Nico Rosberg",
            "team": "Mercedes",
            "photoURL": "images/champions/nico-rosberg.png"
        },
        {
            "year": 2017,
            "name": "Lewis Hamilton",
            "team": "Mercedes",
            "photoURL": "images/champions/lewis-hamilton.png"
        },
        {
            "year": 2018,
            "name": "Lewis Hamilton",
            "team": "Mercedes",
            "photoURL": "images/champions/lewis-hamilton.png"
        },
        {
            "year": 2019,
            "name": "Lewis Hamilton",
            "team": "Mercedes",
            "photoURL": "images/champions/lewis-hamilton.png"
        },
        {
            "year": 2020,
            "name": "Lewis Hamilton",
            "team": "Mercedes",
            "photoURL": "images/champions/lewis-hamilton.png"
        },
        {
            "year": 2021,
            "name": "Max Verstappen",
            "team": "Red Bull",
            "photoURL": "images/champions/max-verstappen.png"
        },
    ]
}

function showChampion() {

    for(var i = 0; f1Champions.champion.length > i; i++){
        var driver = f1Champions.champion[i];
        var selectedValue = selectedYear.options[selectedYear.selectedIndex].value;
        var championTxt = document.querySelector('.champion-txt');

        parseInt(driver.year);

        if(isNaN(selectedValue)){
            window.alert('ERROR! Please select an year'); 
            return;         
        } else {
            if(selectedValue == driver.year){
                document.querySelector('.research-container').style.top = "33%";
                document.querySelector('.champion-img-container').style.visibility = "visible";

                document.querySelector('.champion-photo').setAttribute('src', driver.photoURL);            
                championTxt.innerHTML = `The champion in ${selectedValue} was ${driver.name} for ${driver.team}.`;
            }                    
        }
    }  
}

