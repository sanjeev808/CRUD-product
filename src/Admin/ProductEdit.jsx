import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Wrapper from './Wrapper'

export default function ProductCreate(props) {
  const [title, setTitle] = useState()
  const [image, setImage] = useState()
  const history = useHistory()

  useEffect(() => {
    fetch(`http://localhost:3333/products${props.match.params.id}`)
      .then((resp) => resp.json())
      .then(product => {
        setTitle(product.title)
        setImage(product.image)

      })
    // .then((data) => setProducts(data));
  }, []);

  const submit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3333/products', {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title, image })
    }).then(() => { history.push('/admin/products') })
  }
  return (
    <Wrapper>
      <form onSubmit={submit}>
        <label>Title</label>
        <input type="text" name='title' defaultValue={title} onChange={e => setTitle(e.target.value)} />
        <label>Image</label>
        <input type="text" name='title' defaultValue={image} onChange={e => setImage(e.target.value)} />
        <button type='submit'>Add User</button>
      </form>

    </Wrapper>
  )
}
