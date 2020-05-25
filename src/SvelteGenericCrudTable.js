export class SvelteGenericCrudTable {

    constructor(table, name, editable_fields, show_fields){
        this.table = table;
        this.name = name;
        this.editable_fields = editable_fields;
        this.show_fields = show_fields;
    }

    getKey(elem) {
        return elem.toString().split(',')[0];
    }

    getKeyCapitalLead(elem) {
        let elemKey = elem.toString().split(',')[0];
        return elemKey[0].toUpperCase() + elemKey.substr(1);
    }

    getValue(elem) {
        return elem.toString().split(',')[1];
    }


    resetEditMode(id) {
        this.editable_fields.forEach((toEdit) => {
            document.getElementById(this.name + toEdit + id).setAttribute("disabled", "true");
        })
        document.getElementById(this.name + 'options-default' + id).classList.remove('hidden');
        document.getElementById(this.name + 'options-default' + id).classList.add('shown');
        document.getElementById(this.name + 'options-edit' + id).classList.remove('shown');
        document.getElementById(this.name + 'options-edit' + id).classList.add('hidden');
    }

    resetDeleteMode(id) {
        document.getElementById(this.name + 'options-default' + id).classList.remove('hidden');
        document.getElementById(this.name + 'options-default' + id).classList.add('shown');
        document.getElementById(this.name + 'options-delete' + id).classList.remove('shown');
        document.getElementById(this.name + 'options-delete' + id).classList.add('hidden');
    }

    setEditMode(id) {
        this.editable_fields.forEach((toEdit) => {
            document.getElementById(this.name + toEdit + id).removeAttribute("disabled");
        })
        document.getElementById(this.name + 'options-default' + id).classList.add('hidden');
        document.getElementById(this.name + 'options-default' + id).classList.remove('shown');
        document.getElementById(this.name + 'options-edit' + id).classList.remove('hidden');
        document.getElementById(this.name + 'options-edit' + id).classList.add('shown');
    }

    setDeleteMode(id) {
        document.getElementById(this.name + 'options-default' + id).classList.add('hidden');
        document.getElementById(this.name + 'options-default' + id).classList.remove('shown');
        document.getElementById(this.name + 'options-delete' + id).classList.remove('hidden');
        document.getElementById(this.name + 'options-delete' + id).classList.add('shown');
    }

    gatherUpdates(id) {
        const body = {};
        Object.entries(this.table[0]).forEach((elem) => {
            body[this.getKey(elem)] = document.getElementById(this.name + this.getKey(elem) + id).value;
        })
        return body;
    }

    showField(field) {
        let show = false;
        if (this.show_fields.length === 0) {
            show = true;
        }
        this.show_fields.forEach((showField) => {
            if (Object.keys(showField)[0] === field) {
                show = true;
            }
        });

        return show;
    }

    showFieldWidth(field) {
        let width = '';
        this.show_fields.forEach((showField) => {
            if (Object.keys(showField)[0] === field) {
                width = showField[field];
            }
        });

        return width;
    }

}

