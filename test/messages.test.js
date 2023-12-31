import { expect, server, BASE_URL } from './setup.js'

describe('Messages', () => {
    it('Get Messages Page', done => {
        server
            .get(`${BASE_URL}/messages`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.messages).to.be.instanceOf(Array)
                res.body.messages.forEach(m => {
                    expect(m).to.have.property('name')
                    expect(m).to.have.property('message')
                });
                done();
            })
    })

    it('Post messages', done => {
        const data = { name: 'Some name', message: 'new message' }
        server
            .post(`${BASE_URL}/messages`)
            .send(data)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200)
                expect(res.body.messages).to.be.instanceOf(Array)
                res.body.messages.forEach(m => {
                    expect(m).to.have.property('id');
                    expect(m).to.have.property('name', data.name);
                    expect(m).to.have.property('message', data.message);
                });
                done();
            })
    })
})