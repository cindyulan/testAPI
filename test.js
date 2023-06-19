const request = require("supertest")("https://reqres.in")
const expect = require("chai").expect;

describe("Task 13 API Testing Reqres", function(){
    it("Create Users", async function(){
        const response = await request
        .post("/api/users")
        .set("Content-Type", "application/json")
        .send({name: "morpheus",
        job: "leader"});

        expect(response.status).to.eql(201)
        expect(response.body.name).to.eql('morpheus')
        expect(response.body.job).to.eql('leader')
        id = response.body.id
        console.log(id)
        
    })

    it("Get All Users", async function(){
        const response = await request
        .get("/api/users");
        expect(response.status).to.eql(200)
    })

    it("Get Single Users", async function(){
        const response = await request
        .get("/api/users").send({
            email: "janet.weaver@reqres.in",
            first_name: "Janet",
            last_name: "Weaver",
        });
        expect(response.status).to.eql(200)

    })

    it("Get Users Id=2", async function(){
        const response = await request
        .get("/api/users/2");
        expect(response.status).to.eql(200)
        expect(response.body.data.first_name).to.eql('Janet')
        expect(response.body.data.last_name).to.eql('Weaver')
    })
    
    it("Get Users Not Found", async function(){
        const response = await request
        .get("/api/users/10000");
        expect(response.status).to.eql(404);

    })

    it("Patch User Id=2", async function(){
        const response = await request
            .patch("/api/users/2").send({
            nama: "cindy",
            job: "QA Engineer"
        });
        expect(response.status).to.eql(200)
        expect(response.body.nama).to.eql('cindy')
        expect(response.body.job).to.eql('QA Engineer')
        
    })

    it("Patch User Id= aaaa", async function(){
        const response = await request
            .patch("/api/users/aaaa").send({
            nama: "coba",
            job: "QA"
        });
        expect(response.status).to.eql(200)
        expect(response.body.nama).to.eql('coba')
        expect(response.body.job).to.eql('QA')
        
    })

    it("Put User Id=3", async function(){
        const response = await request
            .patch("/api/users/3").send({
            nama: "Ulan",
            job: "QA Analys"
        });
        expect(response.status).to.eql(200)
        expect(response.body.nama).to.eql('Ulan')
        expect(response.body.job).to.eql('QA Analys')
        
    })

    it("Delete User Id=1", async function(){
        const response = await request
            .delete("/api/users/1");
        expect(response.status).to.eql(204)
        
    })

    it("Register-Succesful", async function(){
        const response = await request
        .post("/api/register")
        .set("Content-Type", "application/json")
        .send({email: "eve.holt@reqres.in",
        password: "pistol"});

        expect(response.status).to.eql(200)
     
    })

    it("Register-Succesful", async function(){
        const response = await request
        .post("/api/register")
        .set("Content-Type", "application/json")
        .send({email: "sydney@fife"});

        expect(response.status).to.eql(400)
        id = response.body.id
        token = response.body.token
        console.log(id)
     
    })
    it("Register-Unsuccesful", async function(){
        const response = await request
        .post("/api/register")
        .set("Content-Type", "application/json")
        .send({email: "sydney@fife"});

        expect(response.status).to.eql(400)
        //error = response.body.error
        expect(response.body.error).to.eql('Missing password')
     
    })
    
    it("Login-Succesful", async function(){
        const response = await request
        .post("/api/register")
        .set("Content-Type", "application/json")
        .send({email: "eve.holt@reqres.in", password: "cityslicka"});

        expect(response.status).to.eql(200)
        token = response.body.token
     
    })

    it("Login-Unsuccesful", async function(){
        const response = await request
        .post("/api/register")
        .set("Content-Type", "application/json")
        .send({email: "peter@klaven"});

        expect(response.status).to.eql(400)
        expect(response.body.error).to.eql('Missing password')
     
    })
})

