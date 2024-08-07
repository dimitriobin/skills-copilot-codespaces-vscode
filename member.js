function skillsMember() {
    return {
        member: {
            name: 'Member',
            level: 0,
            skills: ['HTML', 'CSS', 'JavaScript'],
            learn: function (skill) {
                this.skills.push(skill);
            }
        }
    };
}