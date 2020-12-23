class Command{

    constructor(name, description, owner, permissions){
        this.name = name;
        this.description = description;
        this.permissions = permissions;
        this.owner = owner;
    }

    execute(){

    }

};

module.exports = Command;
