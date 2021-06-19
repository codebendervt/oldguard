import  api from 'api'


init()
    .then(() => {

        const helloWorld = Hello.new('so have we found it')

        console.log(helloWorld.message())

    });



    api('testing my knowledge')

// let doc = document.getElementById("hello")

// console.log(doc)

// doc.setAttribute('data-text','We Work')