import React from "react";

export default class FormElement extends React.Component {
    state = {
        nama : "",
        pekerjaan : ""
    }

    handleSubmit = () => {
        alert(`
        Data telah tersimpan
        nama : ${this.state.nama}
        pekerjaan : ${this.state.pekerjaan}`)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">
                        nama : <input type="text" name="nama" placeholder="Username" onChange={ e => this.setState({nama : e.target.value})} />
                    </label>
                    <br />
                    <label htmlFor="">
                        pekerjaan : <input type="text" name="pekerjaan" placeholder="Pekerjaan"  onChange={ e => this.setState({pekerjaan : e.target.value})} />
                    </label>
                    <br />
                    <button type="submit">Simpan</button>
                </form>
            </div>
        )
    }
}