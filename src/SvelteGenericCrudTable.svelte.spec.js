import SvelteGenericCrudTable from './SvelteGenericCrudTable.svelte'
import { render, fireEvent } from '@testing-library/svelte'
const Icon = require('fa-svelte');



describe('Test SvelteGenericCrudTable', () => {

    it('testSvelteGenericCrudTable_tableName', async () => {
        const tableName = 'tableName';
        const config = {
            name: tableName,
            table: [{A_FIELD: 'A_FIELDS_VALUE'}]
        };
        const dom = render(SvelteGenericCrudTable, config)

        const actual = dom.getByDisplayValue('A_FIELDS_VALUE');

        expect(actual.getAttribute('disabled')).not.toBeNull();
    })


    it('testSvelteGenericCrudTable_editable_fields', async () => {
        const tableName = 'tableName';
        const config = {
            editable_fields: ['A_FIELD'],
            name: tableName,
            table: [{A_FIELD: 'A_FIELDS_VALUE'}],
            options: ['EDIT']
        };
        const dom = render(SvelteGenericCrudTable, config)

        const edit = dom.getByTitle('Edit');
        await fireEvent.click(edit);
        const actual = dom.getByDisplayValue('A_FIELDS_VALUE');

        expect(actual.getAttribute('disabled')).toBeNull();
    })


    it('testSvelteGenericCrudTable_editCancel', async () => {
        const tableName = 'tableName';
        const config = {
            editable_fields: ['A_FIELD'],
            name: tableName,
            table: [{A_FIELD: 'A_FIELDS_VALUE'}],
            options: ['EDIT']
        };
        const dom = render(SvelteGenericCrudTable, config)

        const edit = dom.getByTitle('Edit');
        await fireEvent.click(edit);
        const actual = dom.getByDisplayValue('A_FIELDS_VALUE');

        expect(actual.getAttribute('disabled')).toBeNull();

        const cancel = dom.getByTitle('Cancel');
        await fireEvent.click(cancel);

        expect(actual.getAttribute('disabled')).not.toBeNull();
    })

    it('testSvelteGenericCrudTable_editUpdate', async () => {
        const tableName = 'tableName';
        const config = {
            editable_fields: ['A_FIELD'],
            name: tableName,
            table: [{A_FIELD: 'A_FIELDS_VALUE'}],
            options: ['EDIT']
        };
        const dom = render(SvelteGenericCrudTable, config)

        const editField = dom.getByLabelText(tableName + `A_FIELD` + 0);
        expect(editField.getAttribute('disabled')).not.toBeNull();


        const edit = dom.getByTitle('Edit');
        await fireEvent.click(edit);

        expect(editField.getAttribute('disabled')).toBeNull();

        await fireEvent.click(editField);
        editField.value = 'NEW_VALUE';

        const update = dom.getByTitle('Update');
        await fireEvent.click(update);

        const editFieldCopy = dom.getByLabelText(tableName + `A_FIELD` + 0 + 'copy');

        expect(editFieldCopy.innerText).toBe('NEW_VALUE');
    })

});