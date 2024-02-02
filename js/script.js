// Datos simulados de estados, municipios y localidades por país
const data = {
    "Mexico": {
        "Hidalgo": {
            "Tula": ["Jalpa", "Centro", "Barrio Alto"],
            "Tepeji del Rio": ["Caltengo", "Santa Maria Magdalena", "Noxtongo"],
            "Atitalaquia": ["El cardonal", "El Tablon", "Tezoquipa"]
        },
        "Estado de Mexico": {
            "Naucalpan de Juarez": ["Las Arenillas", "Rincon del Verde", "Ojo de Agua"],
            "Chimalhuacan": ["Acuitlapilco", "Adolfo López Mateos", "Acuitlapilco"],
            "Jilotepec": ["San Miguel de la Victoria", "Agua Escondida", "Buenavista"]
        },
        "Nuevo Leon": {
            "Monterrey": ["Ladrillera", "San Jerónimo", "Monterrey Centro"],
            "San Pedro de la Garza Garcia": ["Ampliación Canteras", "Alto Eucalipto", "Alto Jazmín"],
            "Apodaca": ["Las Cruces", "Los Ébanos", "Los Abrego"]
        }
    },
    "USA": {
        "Texas": {
            "Houston": ["Condado de Harris", "Condado de Dallas", "Condado de Travis"],
            "San Antonio": ["Dallas", "Middlesex", "Hampden"],
            "El Paso": ["El Condado", " El Paso", "Bexar"]
        },
        "California": {
            "Oakland": ["Berkeley", "Hayward", "Fremont"],
            "Anaheim ": ["Fullerton", "Garden Grove", "Orange"],
            "Fresno ": ["Clovis", "Sanger", "Selma"]
        },
        "Florida": {
            "Miami ": ["Miami Beach", "Coral Gables", "Hialeah"],
            "Orlando": ["Kissimmee", "Winter Park", "Altamonte Springs"],
            "Tampa": ["St. Petersburg", "Clearwater", "Brandon"]
        }
    },
    "Canada": {
        "Ontario": {
            "Toronto": ["Mississauga", "Brampton", "Markham"],
            "Ottawa": ["Vaughan", "Gatineau", "Quebec"],
            "London": ["Thornhill", "Whitchurch-St. Clairs", "Georgina"]
        },
        "Quebec": {
            "Montreal": ["Laval", "Longueuil", "Terrebonne"],
            "Quebec City": ["Gatineau", "Sherbrooke", "Lévis"],
            "Jamestown": ["Rimouski", "Labelle", "Saint-Jacques"]
        },
        "Alberta": {
            "Calgary": ["Edmonton", "Lethbridge", "Red Deer"],
            "Winnipeg": ["Brandon", "Steinbach", "Thompson"],
            "Saskatoon": ["Regina", "Prince Albert", "Moose Jaw"]
        }
    }
};


function populateStates() {
    const country = document.getElementById("country").value;
    const stateDropdown = document.getElementById("state");
    stateDropdown.innerHTML = "";
    for (let state in data[country]) {
        const option = document.createElement("option");
        option.text = state;
        stateDropdown.add(option);
    }
    populateMunicipalities();
}

function populateMunicipalities() {
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const municipalityDropdown = document.getElementById("municipality");
    municipalityDropdown.innerHTML = "";
    for (let municipality in data[country][state]) {
        const option = document.createElement("option");
        option.text = municipality;
        municipalityDropdown.add(option);
    }
    populateLocalities();
}

function populateLocalities() {
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const municipality = document.getElementById("municipality").value;
    const localityDropdown = document.getElementById("locality");
    localityDropdown.innerHTML = "";
    const localities = data[country][state][municipality] || [];
    localities.forEach(locality => {
        const option = document.createElement("option");
        option.text = locality;
        localityDropdown.add(option);
    });
}

function saveFormData() {
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const municipality = document.getElementById("municipality").value;
    const locality = document.getElementById("locality").value;

    const savedDataElement = document.getElementById("saved-data");
    const newDataRow = document.createElement("div");
    newDataRow.innerHTML = `<strong>País:</strong> ${country}, <strong>Estado:</strong> ${state}, <strong>Municipio:</strong> ${municipality}, <strong>Localidad:</strong> ${locality}`;
    savedDataElement.appendChild(newDataRow);
}

function clearData() {
    const savedDataElement = document.getElementById("saved-data");
    savedDataElement.innerHTML = ""; // Borra todos los datos guardados
}

// Llama a populateStates al cargar la página para cargar los estados del país seleccionado inicialmente
populateStates();
