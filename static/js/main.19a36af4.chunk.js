(this.webpackJsonpmesapartesvirtual=this.webpackJsonpmesapartesvirtual||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(4),c=a.n(s),o=a(35),r=a.n(o),i=(a(44),a(23)),l=a(24),d=a(21),j=a(26),m=a(25),A=(a(45),a(15)),u=a(18),h=a(19),b=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={uploadValue:0},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"form-group text-center",children:[Object(n.jsx)("progress",{value:this.props.uploadValue,max:"100",children:Object(n.jsxs)("span",{children:[" ",this.props.uploadValue,"%  "]})}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{children:["Adjuntar archivo ",Object(n.jsx)(u.a,{className:"fa-icon",icon:h.d})]}),Object(n.jsx)("div",{className:"custom-file",children:Object(n.jsx)("input",{id:"file",type:"file",onChange:this.props.onUpload})})]})}}]),a}(s.Component),p=a(31),x=a.n(p),O=a(38),g=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).EnviarFirebase=function(t){t.preventDefault();var a={tiposolicitud:e.state.tiposolicitud,asunto:e.state.asunto,nombresapellidos:e.state.user.displayName,tipodocumento:e.state.tipodocumento,nrodocumento:e.state.nrodocumento,email:e.state.user.email,telefono:e.state.telefono};A.a.database().ref("Documentos").push().set(a),document.getElementById("nrodocumento").value="",document.getElementById("asunto").value="",document.getElementById("telefono").value="",document.getElementById("file").value="",document.getElementById("tiposolicitud").value="",document.getElementById("tipodocumento").value="",e.setState({uploadValue:0}),x()({text:" Se registro correctamente su formulario a mesa de partes.",icon:"success",button:"Ok",timer:"3000"})},e.state={user:null,pictures:[],uploadValue:0,tiposolicitud:"",asunto:"",tipodocumento:"",nrodocumento:"",telefono:""},e.handleAuth=e.handleAuth.bind(Object(d.a)(e)),e.handleUpload=e.handleUpload.bind(Object(d.a)(e)),e}return Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=this;A.a.auth().onAuthStateChanged((function(t){e.setState({user:t})}))}},{key:"handleAuth",value:function(){var e=new A.a.auth.GoogleAuthProvider;A.a.auth().signInWithPopup(e).then((function(e){return console.log("".concat(e.user.email," ha iniciado sesi\xf3n"))})).catch((function(e){return console.log("Error ".concat(e.code,": ").concat(e.message))}))}},{key:"handleLogout",value:function(){A.a.auth().signOut().then((function(e){return console.log("".concat(e.user.email," Salir"))})).catch((function(e){return console.log("Error ".concat(e.code,": ").concat(e.message))}))}},{key:"handleUpload",value:function(e){var t=this,a=e.target.files[0];A.a.storage().ref("Documentos/".concat(a.name)).put(a).on("state_changed",(function(e){var a=Math.round(e.bytesTransferred/e.totalBytes*100);t.setState({uploadValue:a})}),(function(e){console.error(e.message)}),(function(){x()({text:" Se adjunto correctamente su archivo.",icon:"success",button:"Ok",timer:"3000"})}))}},{key:"renderLoginButton",value:function(){var e=this;return this.state.user?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"separar"}),Object(n.jsxs)("div",{className:"card col",children:[Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("br",{}),Object(n.jsxs)("strong",{className:"",style:{color:"#004C4C"},children:["\xa1Hola, ",Object(n.jsx)(u.a,{className:"fa-icon",icon:h.f})," ",this.state.user.displayName,"!"]}),Object(n.jsxs)("button",{onClick:this.handleLogout,className:"btn btn-danger",style:{float:"right"},children:[" ",Object(n.jsx)(u.a,{className:"fa-icon",icon:h.e})," Salir"]})]}),Object(n.jsxs)("span",{className:"badge bg-info text-white",style:{marginTop:"10px"},children:[Object(n.jsx)(u.a,{className:"fa-icon",icon:h.c})," Registro de expediente"]}),Object(n.jsxs)("form",{className:"form-group",onSubmit:this.EnviarFirebase,children:[Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"form-row",children:[Object(n.jsx)("div",{className:"form-group col-md-7",children:Object(n.jsxs)("select",{id:"tiposolicitud",className:"form-control",name:"tiposolicitud",onChange:function(t){return e.setState({tiposolicitud:t.target.value})},required:!0,children:[Object(n.jsx)("option",{value:"",selected:!0,children:" Seleccione el tipo solicitud "}),Object(n.jsx)("option",{value:"CAS",children:" CONVOCATORIA CAS "}),Object(n.jsx)("option",{value:"PRACTICAS",children:" PRACTICAS "}),Object(n.jsx)("option",{value:"TRAMITES",children:" TRAMITES "}),Object(n.jsx)("option",{value:"OTROS",children:" OTROS "})]})}),Object(n.jsx)("div",{className:"form-group col-md-5",children:Object(n.jsx)("input",{type:"text",className:"form-control",id:"asunto",name:"asunto",onChange:function(t){return e.setState({asunto:t.target.value})},placeholder:"Asunto de la solicitud",required:!0,minLength:"4"})})]}),Object(n.jsxs)("h5",{children:[" ",Object(n.jsx)(u.a,{className:"fa-icon",icon:h.a})," Datos Personales  ",Object(n.jsx)("img",{className:"imgRedonda",src:this.state.user.photoURL})," "]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Nombres y Apellidos"}),Object(n.jsx)("input",{type:"text",className:"form-control",value:this.state.user.displayName,disabled:!0})]}),Object(n.jsxs)("div",{className:"form-row",children:[Object(n.jsx)("div",{className:"form-group col-md-7",children:Object(n.jsxs)("select",{id:"tipodocumento",className:"form-control",name:"tipodocumento",onChange:function(t){return e.setState({tipodocumento:t.target.value})},required:!0,children:[Object(n.jsx)("option",{value:"",children:" Seleccione el tipo documento "}),Object(n.jsx)("option",{value:"DNI",children:"DNI"}),Object(n.jsx)("option",{value:"CARNET EXTRANJERIA",children:" Carnet Extranjer\xeda "})]})}),Object(n.jsx)("div",{className:"form-group col-md-5",children:Object(n.jsx)("input",{type:"text",className:"form-control",id:"nrodocumento",name:"nrodocumento",placeholder:"Nro documento",onChange:function(t){return e.setState({nrodocumento:t.target.value})},required:!0})})]}),Object(n.jsxs)("div",{className:"form-row",children:[Object(n.jsxs)("div",{className:"form-group col-md-7",children:[Object(n.jsx)("label",{children:"Correo electr\xf3nico"}),Object(n.jsx)("input",{type:"text",className:"form-control",value:this.state.user.email,disabled:!0})]}),Object(n.jsxs)("div",{className:"form-group col-md-5",children:[Object(n.jsx)("label",{children:"Tel\xe9fono"}),Object(n.jsx)("input",{type:"text",className:"form-control",id:"telefono",name:"telefono",onChange:function(t){return e.setState({telefono:t.target.value})},required:!0})]})]}),Object(n.jsx)(b,{onUpload:this.handleUpload,uploadValue:this.state.uploadValue}),Object(n.jsx)("div",{className:"container text-center",children:Object(n.jsxs)("button",{className:"btn btn-success",style:{marginTop:"-5px"},children:[" ",Object(n.jsx)(u.a,{className:"fa-icon",icon:h.b})," Enviar"]})})]})]}),Object(n.jsx)("br",{})]}):Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("h1",{className:"display-4",children:"Instrucciones"}),Object(n.jsx)("p",{className:"lead text-white texto",children:"Primero debe iniciar sesi\xf3n con su cuenta gmail , para poder realizar su solicitud por mesa de partes."})]})}),Object(n.jsxs)("button",{onClick:this.handleAuth,className:"App-btn",children:[Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQUSURBVFiFtZdbbFRVFIa/debQ6ZTawRG1gEpLbOkFigahRDBB6SVFq1gTUaPP+GKCEaNEIkQTQ0K4+eQDCcZAQtJAgLYQaIEmEEsHGkVCkXqJ194i2ul1pp2zlw+1tQ5n2qF21uP+117fv3f2PmdtIcHoLCua7XN8lWDWgKxUmA8EBAzQDXSiXBW0PmxmX3igsbE/kboyVcJfa1dlicdsE9gIpCfodwD0gCNmT6Ch5ZdpGdCKR72h4cBHApuBlATBsTECsjOjJ/qxtLSMJGwgVFqcI0arFZZNExwblzMGPc9IU9NQrGDHDvStKy4wxtQrMn+G4L2i+okbHGJ2oKdsZbY4BIG5M4JW+VZEX8g4F2yLlzK+A+2Vy9OsQY5rYvCbQFDgd4DR3dJiIP/fFDntWNFXAw0tockKjRtIH7S2KRRNkqsIhzx4dqU3NF13S+gre2KJcaz3Fdr9gUe2SnW1M9VKBCC8e27u8Onsr1XFFyfvtlq6cU79lXNTFbzbsAHsoj/ekXsjvsixHHTojnN5W4xZ7T939dZMwwFET5ERnUUn4DMhL8NHczDdaWO6qqWlyVj5WFhOChWAD8DyR/C+0Yq9+M8xf4eTCQewUNZNHJBZhpQN32Ov7OxyYFcy4QAyUk8QWOGitc0qZfFUBTbsGTosyGvTo3PJAha6asKX0yp6N3wl0wL8bqIaOpJtAJhnAeoqWVjJpivYFtDjKhoyk20ACFnAz26KJaxOPl9+sAW+UiiOlb4x/kXlNUuXnam8dG2yEmrpp+JYx+MiMIUqsj3O7Gs2ynmENycO1zrz+DC6hBGRd4HXJzNwYnNaM9AcT39xz1BVPM1SakQvkB6N0g34HIT9Tg4Ho1njFkUov/ns2frJTMSLl/aFy43hNO6dV7+/13u/JU/TL8oXfdi8NfL4RDiAqHKk8FRFwd3DI0XGcCgOHFUOfr5DwhZAB97dVZEnb180rr1IwDHOxfy6stJE4Rv2hiuM4Tzxm5shE3V2AqN3/eGyyHddpH42Sc2AKmfyassO5daUx21U8+pKlhaerDoSTm2tA70vfjnde/K92e0wYXuyLqxNTR1IuUwinbByS9GgWPIbKgq6gNGblAcgapPZvYk5oXK3yUG7N/Wp6h0y/B8DAPl16xeqRpuBB6c0kUDMCZWT2b0J0fEmp1OMrjq2xTf+7bnjgBSeqihwjHMWWDATJtKGCljQsRU76u8wRkpObPG2TtRdT2hubckiwToq8NhMmPCGs65n/7r/+eNv+36K1Vx/OG3PNfxoD/qLUXYCw/+DPQKy3c5qWe4GhwQep/+ciw+AV4B7EgT3AQc8avbdqGyY3uM0NpbXVKYNEqlU0TUgK4CHgACjz/MuoFNErija4BkYbrzxcmLP878BSA2BsYihx1AAAAAASUVORK5CYII="})," Iniciar sesi\xf3n Gmail"]}),Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{})]})})}},{key:"render",value:function(){var e=O.a.timeline({repeat:-1,repeatDelay:1});return e.to("#titulo",{duration:2,x:120,ease:"linear"}),e.to("#logo",{duration:2,rotate:360}),e.to("#logo-github",{duration:2,rotate:360}),Object(n.jsx)("section",{id:"inicioSesion padding",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-3 col-md-3 col-sm-3 col-xs-12"}),Object(n.jsx)("div",{className:"col-lg-6 col-md-12 col-sm-12 col-xs-12",children:this.renderLoginButton()})]})})})}}]),a}(s.Component),f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,58)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),c(e),o(e)}))};a(52),a(53);var v=function(){return Object(n.jsx)("nav",{id:"nav-color",className:"navbar navbar-light bg-light fixed-top ",children:Object(n.jsx)("div",{className:"container-fluid padding",children:Object(n.jsxs)("a",{className:"navbar-brand",href:"#",children:[Object(n.jsx)("img",{id:"logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA/CAYAAABQHc7KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5AweCRQPhffP0gAAEHlJREFUaN7tmXmMXeV5xn/fd7a7zZ3VjHccGzPGO+BgY0MogaQkodlIUyhRUpImUdVWVZpWrdT+k0qNkn9KW1VVqihL1dJGbUmA0ICNEgzBBoz3hcE23sbj8YztWe7cufee7fve/nHuHZukTewE00SZZ3R1NFfnnnOe533e5fsOzGAGM5jBDGYwgxnMYAYzmMGvINRbdSPp+wzHqXvteA4QCcisw9/4/+Z/9QTo73uQUKzuVl67h1rhom9xUBsdVKcSXlHCZpXYXcWT35i05ftxJr/1yy3Ajr6PUsNwreQLAc4iT6nVGnWng7pZoZZqoaxQKAtKQAtTVqmdE575fFGc3R2Hv/rLJ8DRpQ8SKXHacOb66OUO6nYHtUmjlmlUjwJXS0ZaCyilUEphEE6pOo8WR9mVq20bcJOvOMrZLnAKMK/8cNsvpgAv9t5PNbLqbT1uR147fQ5qnYPeqGGdg1qgUDktoEShBbQotNIopRDAGEsUJYzWq2x2htnSez06HzDmHE8bzuRpcXhOKf20Unq7oM6A2B3Pv/CLIcDZhQ8iltl45k9dL3iHNup6rWnTKPUGwii01iilERFMaknjlDQxpKmhkSScjMd4PrjAwNyPsbzzA0zYYUbkIENqF+P6VBI5tRNo2YrS/w36ZSv2vAJ7NZzhXu6JUTiBRGqNrKn+ftfdvYE6kEMdddGToJVGaw0orLUkcYpJDSa1iBVEQEQQEeqSUJcEg5DaGtfdnZDvWMTwgT7Ghu7lQu20N2z3Xj8ku66fUAMfj3XtmFJsVajv3XL7bTuSNB3VWsuubdvfWgHAIClGzbLoTSlqfQ2OuahvFjHnhSSOm4QtYt9oLQUIkIoltAkGiwWsTSj11rj+nQ5L3+NQGcxzdu9yzvWvYnzkPs43jucG5eUVI7JvRUUGPxlTO+y6ajOoLW+/bdPe1KRjWmt2bXvx6gugtEYpScSItSgkdHGuNYTlEHNCoTQgKiPeYtyEkEU/lpRYDNL6DiGp1qg8sQev1Eb3uuX0PjCHJMkzdrzM2T03M/LqzYyfn+RcdDg/aF5ce9bsXTtpz/xBStivHfUUop65aeOGvePDQ9W2zh7279p9RQI4l3vi59qWQaIWmXmNj3nri97ggE+522BfcpCRrLqj/rfIy3T06zambhPqEjPkRlSKfay8aTEdfUVkokay9wjJgaO4SZ2u5SUW3F5g/gaXWYvzdOUXMCtZzxyziW51g+9RmJvYxh0JjftQcleh3OFbUftnz59vR84MvvkOAA1KhEikGrv869BsPjvnNJ2XniKXHrPcR8CKJRFDIgYj9pJTBbGWUVK8FQvoaFuJU2mQHhti6pGn8bo7yK3tY8m6hSy+o0RlWHN23zWc2dnLheO3c2FimKF4V3l37eu3V+Khcmr4LwWjV+KAy08BFAgJKaY9iHng5nOU8xd9LsiPOn/6+7QpQCoWO+2JVmpYGrUa41NTVMtTFLs66bhjFWU3jzsyQdp/knj7Ppw5PbStWUr7XXNZcnfAxKDDqe1zOfDdDvpr32U0HYgFN70S8lfmAAExUleW2FXCdeUGCkWsM9It8urS8xGMWNJW9LHN/J82SdYdrGCNIQpDzNg4YRQx2d5OeU43HX23k08s9vBJ4u0HMM/uQs/vpXPNEtjUzf4tDYwkoAgVJFdNAA2Q2JqFEAFrNI4rKKdJpJn/0mIGWBEMlhRLKhZzSfQvlsHMBdYYTJqijMGkmRjjo6MkScLChdfibFzLZN9yio0K0v86jZcOEC3dgDEGSwwoi1hRVzjbXrYAjtYo5SRGMFhBuaC0gN+0v1xi/2Zks+i3yGf2tz8qglz82NRgkgRjUsRaaH6vFezeM8Uj/3GBO+5o49733kpgDOOHYtJ0MnNA64pyZQroyxbAcXFcTzAKrKCUoDSooJXPWfSlSdLQjH5LABGsZNRbz9hqh7YlgLWYpgOstVhrp+8/Xkk5M5zwwxcqVMZjtKtJY4VJLBYDoiQLw1VygFYuyhWIASMoJPO8n0U7q5E0o8Z09JPmZ1qEVvRVSwLwPZ+wSVqMydLBGByxiAhJkrJiWY6lS3L4vsFxFJdkWstRCThXTwCldDY1tATQglKAK9iL4Zx2QIolaeb/j9lfgUY18x+6ujsoJGVqcUwjiaed0HLBRKWC48BDHyvi+wGlokumectKgsCkoM2VmuAK2qBGOaBSBRMOOvBQQZpFvtX3aRa+S3I/xWKUYLJlIkorXDSB65CalGMvWXBdevp8urpKGCWkKIzjYJVCrCU1htQaglyKUiFj4yHl9rbmKjNzCUh1UjrTdlW5OgKQreWtQqUqVujTeThrUHHKdHcXwUgW/UsdkCqLVdmkoLUm0B7XuiX6zR62v5pw9Pgq5i9YyII1ReascelZkqfYXQLXR2l3OrWsze6Rpg1yhRxK+81KYwCiWc55ajZ/lQRAgdWJUipSFnAE5WV2ts3ctiLTUU/EkDRFMM2iKCornq7S9FGizyh2r55iZ8d+dr66h/4nlzB32zIWrZzNdZtgwU0+HXPzOK5HnKaEUUTUTJEsARSGGCspCNagmJosXh0BBIVKnQhNHQPKtyhRKHWJ7blY8DLyhswfWQVQCCrLFxJfYH43qz/4bm5YtZjBwdPsf2U/r+98ghM75nHi0AYWLr6e6zbkWLxJ0b24QKlUJIoT6o2wufyGVKKLbdDCuZObr44AWoETeTFIXdoSyBmYcsABw8Vqn4glbkVfZdMfTQ+ErqXe4eP0zSe/8jq8hXPQXXn0ZJV5c+ez8KNLqNwzwdH+wySDW5k8/Qo7vreOI8+t5tqVs7j2Vs01Kz3aO31wspSwkmLFAEpErngSvoJBSCy+9kQiaywJLGqA0XDQJbFCJJbEGmKxRBgiSampmLpviNs87PwuZFEvuYVzKPVeg1MuI65D2GiQJDEyWcErFMi3tXHj+vXUVvRx9MCL7PvBlxgfWULP8J1c+9J6Fi5awMJbfOa9HcJJsrqQFeCayBV3wZ8uwFcf+XeWL+jh2cQEzoXGskV/O1LO/+AU+S4XdU0OCkIsQmQtDZsypWLGvYThgmawUGY46KaR7+K6RV2sXD6Lru4C2lVYpVHawcn5aNchMin1apUTx47x6mv9nDp1ionxcUZHzqHdYWbPO43M6+fosVlcc3gdC59aQbm9A2yzDYlMaueyV/c/WYCnnt/K957+IR+49868o+hLxP5aWaV3ySzWTX76nt78s3vR/3Scwg0VzHiRqrKc90POljQDbZ0M5HoYpotq6gETBGqEPScGODzUzZK3LWXl8nnMm1vEDTQGhQj4XoDjeSRhyJnjJxg6PcBUrUYUxri+RxyHzF3WTuntASOntrLj1e9Ten05SlysWFasXrX4i3/38JzTpwaGHa3lrpvWXpYAbxicXzx4AMd1g7BeW4bInQreo5AbHUWPgyhHLNrE6LCBd/wchZePMP7aEJurwpFCL4Oqh4m0QJrW8GSQUm6YIDeF0gaUwlqIQhfUNcyb38faNW9j8aIyhYLGKjAiGDFMTVU5PXCKQ4cO8Vp/PxdGR0EriqUSc+bP46Zb1rPqxrWcPnGag6+8xkRthPd/5MNm5Zo1R4wxTwryqDVmvx/4jZOnhnjwnrsuT4Adh48B6qPY5Ctikw5ElKMVjlK0jq4CR2WjcNJI+ZfHzrF5R524AdoYdLSLrvyr5IIE19WIQGoyAeDi5mgUayLTSVdvH6tX9bHqhmvo6fIAIbVZ10hMwujYKIf7+9m/by+jo6PMmj2bG9et49bb30F7RwdRFCEi5AvFbFbIxudxEXkR5D8dx93yg+e2Dn3oN97Pynlzf7IAz+5+FeA2z3Mf9n13refg6iZZrRS6OcJqlYkBihNnE57bM8XL+6oMn6mRVF/HSfZQ9s7SlhcCz58eYiwyLYSxFgXEKYRpmUL7YpavWMHaVQtYMCeP4wipMRhrECy1eo3qVJViW4kgCFBa43keuUKBXC6P1s70erxVDK0Vkjh9qjpZ/y2tdfV9t637MQHeUDVuvfNefvNdGwc++MAnHrMix0TULKXdXsd1HdWKIJAtA7P/u8oeq68rcNPyEp09OarSzViyhErUy1Q9xqST5HzwfTd7V8Aly2at0Y4icCMkHeH0wDH2HDzLwDlFkC/T2VmkUPBxHBffz1MutxMEAY7ronW2BR/HEdZalNZo7eBojVgIG7GtVuqDlYmpp6tTjWfjODHf/rd//skOaOFbm19gxQ1LOHnyTE++kHtfLgg+mQu8Db6nfUcJNNfoGpWNyNLcFAUuVAy7D9fYurPKa8cmqY0P4kaHKDvH6SrGFHI+xsp0WliR5k5y9nsrQpx4TKW9zFl6D+tvnM3aG4r0dHjZDpM1gOB6HtrRxHFImqZox0UsRGEy2WiErzQa8aP1erjlzJnzJ4vFnPnj3/3IT68BP4q/+eZjvOddGzn6+kBnoZh7b1OIW33PyTs6m+rU9F92uez9H1Rqln1Ha2zdVeXgkSoTo8PoxiHa1FHK/iSFvEfWttT0VBfFEfV6SKUaU7dzUbM+hJfrYM6sHBvWlNmwpszCuXk8VzdHcEsUhdSm6mmt3jgeNqIt9Xr0aKUytfO2Taun/v4fHuXrD//J5XeB/wuf+8JX+O0H7mFo6Hy5VMrfHQT+p3OBf0fgu3mnua5XzZefrcu2hKhHltdONnh25yS7Dk1x4fx5pP4ahfQgnbkJSoVssVOp1Jio+zTUQkzhBtziIoKgDa0cbPNB29scNq4tcf89PSgSqtVapVFvbKvXo2/X6+GWUwNnzxQKOftnv3f/5dC6fAEuxeaX9xOGUalULNwV+N6ncjn/nb7vFl2dDSQXnXDxqJQiSoTXTzd4fvckLx2Y4uzwGGbqdYKkH2tSImcRUliCE/TgOj66WWYyUQWTJkRhSDmf2s9/YnZ/T7v67lQtfHJ8rLqn1FaoP3Tfu6+Uys8mQAvP7DhAvR4WSsX8HX7gfzYXeHcGvld2HfXGize7hVKglSIxMDAc8vyuCtv2VhkYrpGkgqNdmu9WmsRBYUmTmCRqkMQhNo0rnrZP/vrGtr/85perJ//iy5ov/vmnflYKP58ALTy1fS9RlOSLxdzGIPA/kwv8dweB1+E6+uLFVXP3pukKrRXGCsMXIrbvrbB1Z4UTQxFpKmglYFOSOCSNQ9IkTiVNjohJnhQbf0fi+j7t5Rtjuz/38z76myNAC9/feZDKZC0oFfMbc4H/UBD47w0Cr9tzHd6wVX1JndAqW2ZfGI94bucFHnn8FJXJmDSJsGlywZpkm5jkOzZpPJNUzpzVfkmmjvz1m/XIb64ALTyxdSdJmnqlUv6WIPA/lQv89weB1+157o8LIUKaGqIwYnhkIvrC3x2IT5yJTyLp4yaNnjBhbb+TL0eV3X/0Zj/m1ROghcee3UEUJV5He+kmP/A+Hvjefbmc3+t5DlaEKIqp1xq2UQ8HG2H0zNhY/fEv/WP/ueEL0alkYmjELZSlduQLV434VReghW9//2XCMHI7OtpW5wL/IcdRHw4bjVIYxrvDMH48iuInR0bGTuZyfvqHv/Ohq074LReghW899QJWcPK+s6xeq7dP1cIDmzYtr37ta1t4+K8++5YTn8EMZjCDGcxgBjP4lcf/AIfVNK0Ki2E6AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTEyLTMwVDA5OjIwOjE0KzAwOjAwqcmXZQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMi0zMFQwOToyMDoxNCswMDowMNiUL9kAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABl0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMTA4MBqk9C4AAAAYdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTA4MA/tKDcAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYwOTMyMDAxNHW17iYAAAAUdEVYdFRodW1iOjpTaXplADQ0MzQ1OUJC3dxkPwAAAF10RVh0VGh1bWI6OlVSSQBmaWxlOi8vLi91cGxvYWRzLzU2L1JFU3d0eHgvMjc4Mi93b3Jrc3BhY2VfY29tcHV0ZXJfZGVza3RvcF9vZmZpY2VfaWNvbl8xNzcwOTUucG5nhGjtpwAAAABJRU5ErkJggg==",alt:"",width:"48",height:"48",className:"d-inline-block align-top margen logo",style:{marginTop:"-10px"}}),Object(n.jsx)("label",{id:"titulo",className:"text-white",children:" Mesa Partes Virtual "})]})})})};var N=function(){return Object(n.jsx)("footer",{id:"footer",className:"padded",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h6",{className:"text-center text-white",children:" 2021 - Todos los derechos reservados "}),Object(n.jsx)("div",{className:"col text-center",children:Object(n.jsxs)("h4",{id:"name",className:"text-center text-white",children:[Object(n.jsx)("span",{children:" P"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"e"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"d"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"r"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"o"}),Object(n.jsx)("span",{children:" M"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"a"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"n"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"u"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"e"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"l"}),Object(n.jsx)("span",{children:" A"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"n"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"t"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"o"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"n"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"i"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"o"}),Object(n.jsx)("span",{children:" J"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"u"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"r"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"a"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"d"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"o"}),Object(n.jsx)("span",{children:" M"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"o"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"r"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"e"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"n"}),Object(n.jsx)("span",{className:"name_animation transparent",children:"o "}),Object(n.jsx)("a",{href:"https://github.com/PedroManuelJM",target:"_blank",children:Object(n.jsx)("img",{id:"logo-github",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAwgAAAMIBT4kc1wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHaSURBVEiJpdVPS1ZBFAbw373aH1GMsEUgGLoq24TZJvoAkRgUtAhCaBVW1MYWfYHCreUXkJYatCgQ3Bkto10pmLh150Ja5bTwXhrHee/rqwfO4j5zzvPMmTtzThFC0GRFUVzGLYxguII38RtfQwi/GglCCIccJe5hBaGNr1SxZZYrQz6A5SMQp76MgUYBjGPrGOS1b2E8K4BBbJ+AvPZtDB4QQDdWo6AveIyP+NtAtodPmMLnCF9FdywwkyROR5VdwwtM4ErlExV2PYqbTjhm6hvalTn3J7kb0eR4lvkfXSUmMeSg9erc+pPvoYrbQqK8iZ5jVNBb5cZcC6X9FxrbUgjhT6fbDyHsYimBR3ICPzslb8gdLh0+u/MnEEhzz5XYSMC0ok4szd0osZaAE0VRnOqUuSiK07iTwGsl1hNwCE87FcBLXEqwdRiz/+SD/21hD2/Qd4Tr2Ye38m1krA5arMDX9odL3fR28AEPM8QPqrWdDHnAYtyLRqPdP8cN7EbBUxmB2y2I65MYTdv1bLTri7iKV3iErozAhQaB2VYDZ64K+Iab6EF/i7M/24J8rt3InM8k5SrICcy3nclV8l38iBLPtBH4jskjDf2IoKhuynsULdbf4X5uvfZ/k1Fz8ISVz5MAAAAASUVORK5CYII="})})]})})]})})},U=a(36),V=a(9);A.a.initializeApp({apiKey:"AIzaSyDQABJCfmJGDqUFmxBvnSJX0jGy4TktQME",authDomain:"mesapartesvirtual-4c0bf.firebaseapp.com",projectId:"mesapartesvirtual-4c0bf",storageBucket:"mesapartesvirtual-4c0bf.appspot.com",messagingSenderId:"87526428300",appId:"1:87526428300:web:3e4c3b6f1348434531f5a9"}),r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsxs)(U.a,{basename:"/MESA_PARTES_VIRTUAL_APP/",children:[Object(n.jsx)(v,{}),Object(n.jsx)(V.c,{children:Object(n.jsx)(V.a,{exact:!0,path:"/",component:g})}),Object(n.jsx)(N,{})]})}),document.getElementById("root")),f()}},[[57,1,2]]]);
//# sourceMappingURL=main.19a36af4.chunk.js.map