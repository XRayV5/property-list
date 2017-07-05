// import propertyJSON from './data.json';
var fakeDB = { 
    "results": [{
        "price": "$726,500",
        "agency": {
            "brandingColors": {
                "primary": "#ffe512"
            },
            "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
        },
        "id": "1",
        "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
    }, {
        "price": "$560,520",
        "agency": {
            "brandingColors": {
                "primary": "#fcfa3b"
            },
            "logo": "http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif"
        },
        "id": "2",
        "mainImage": "http://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"
    }, {
        "price": "$826,500",
        "agency": {
            "brandingColors": {
                "primary": "#57B5E0"
            },
            "logo": "http://i1.au.reastatic.net/agencylogo/XCEWIN/12/20150807093203.gif"
        },
        "id": "3",
        "mainImage": "http://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"
    }],
 
    "saved": [{
        "price": "$526,500",
        "agency": {
            "brandingColors": {
                "primary": "#000000"
            },
            "logo": "http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif"
        },
        "id": "4",
        "mainImage": "http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"
    }]
}

const delay = (ms) => 
    new Promise(rslv => setTimeout(rslv, ms)); 

export function apiFetch (req) {
    return delay(500).then(() => {
        const { method, url, data } = req;
        if(method === 'GET' && url === '/saved') {
            return fakeDB.saved
        }   
        else if( method === 'GET' && url === '/result' ) {
            return fakeDB.result
        }
        else if( method === 'POST' && url === '/saved' ) {
            fakeDB = { ...fakeDB, saved: [...fakeDB.saved, ...data]}
            return fakeDB.saved
        }
        else if( method === 'DELETE' && url === '/saved' ) {
            fakeDB = { ...fakeDB, saved: [...fakeDB.saved.slice(0, data.idx), ...fakeDB.saved.slice(data.idx + 1)] }
            return fakeDB.saved         
        } 
        else if( method === 'GET' && url === '/all') {
            return fakeDB
        }
        else {
            throw new Error('Request does not match any existing route')
        }
    })
}