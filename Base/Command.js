class Command{

    constructor(name, aliases, description, permissions, category, owner){
        this.name = name;
        this.aliases = aliases;
        this.description = description;
        this.permissions = permissions;
        this.category = category;
        this.owner = owner;
    }

    execute(){

    }

};

module.exports = Command;
