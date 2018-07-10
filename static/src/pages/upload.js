import React, { Component } from 'react';
import Header from '@/header';
import axios from 'axios';
const qs = require('querystring');
class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: {},
        }
    }
    getImage=(event)=>{
        const file = event.target.files[0];
        const _this = this;
        if(file.type.includes("image")){
            let reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = function(e){
                const result = {[file.name]:reader.result}
                _this.setState({imgs:result},()=>{
                    console.log(_this.state.imgs)
                });
                axios({
                    method:'post',
                    url:'./api/upload',
                    data:qs.stringify(_this.state.imgs)
                }).then(res=>console.log(res)).catch(err=>console.log(err));
            }
        }
    }
    render() {
        return (
            <section>
                <Header title="图片上传" {...this.props} />
                <section className="components-upload">
                    {
                        Object.values(this.state.imgs).length > 0 ? Object.values(this.state.imgs).map((img, key) => {
                            return (
                                <p key={key} className="iconfont icon-add">
                                    <input type="file" key={key} className="iconfont icon-add" onChange = { this.getImage } />
                                    <img src = {img} />
                                </p>
                            )
                        }) : <p className="iconfont icon-add"><input type="file" value = "" onChange = { this.getImage } /></p>
                    }
                </section>


            </section>
        )
    }
}

export default Upload;