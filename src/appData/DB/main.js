module.exports = {
    schema : {
        userstatus : {
            registered: 'UR',
            active : 'A',
            blocked: 'B',
            deleted: 'D',
            freeze: "F"
        },
        userrole: {
            normal: "UU",
            admin: 'UAA',
            author: 'UAU'
        },
        others : {
            defaultUsername: 'NA'
        }
    },
    model : {
        name : {
            user : 'users'
        }
    }
}