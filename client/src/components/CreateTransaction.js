import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateTransaction() {
    const [transaction, setTransaction] = useState({
        name: '',
        type: '',
        amount: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        console.log(transaction);
        setTransaction({
            name: '',
            type: '',
            amount: ''
        });
    };

    return (
        <div className='d-flex flex-column align-items-center'>
            <h2 className='mb-4' style={{ textAlign: "center" }}>Transaction</h2>
            <Form className='d-flex flex-column justify-content-center' onSubmit={handleSubmit}>
                <Form.Control type="text" value={transaction.name} name="name" placeholder="Groceries" className='mb-3' onChange={e => setTransaction({ ...transaction, name: e.target.value })} />
                <Form.Select className='mb-3' value={transaction.type} name="type" onChange={e => setTransaction({ ...transaction, type: e.target.value })}>
                    <option value="Investment">Investment</option>
                    <option value="Expense">Expense</option>
                    <option value="Savings">Savings</option>
                </Form.Select>
                <Form.Control type="number" value={transaction.amount} name="amount" placeholder="Amount" className='mb-3' onChange={e => setTransaction({ ...transaction, amount: e.target.value })} />

                <Button variant="dark" type="submit">
                    Create
                </Button>
            </Form>
        </div>
    );
}

export default CreateTransaction;