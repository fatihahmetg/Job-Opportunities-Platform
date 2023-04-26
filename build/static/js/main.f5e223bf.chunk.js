(this["webpackJsonpreact-mernstack-crud"]=this["webpackJsonpreact-mernstack-crud"]||[]).push([[0],{100:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n(25),c=n.n(o),s=n(27),i=(n(69),n(2)),l=n(43),r=n(49),d=n(48),u=n(64),h=n(40),j=(n(70),n(71),n(8)),b=n(16),m=n(17),p=n(11),O=n(23),x=n(22),g=n(7),f=n(33),v=n(26),S=n.n(v),C=n(1),k=function(t){Object(O.a)(n,t);var e=Object(x.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).onChangeStudentName=a.onChangeStudentName.bind(Object(p.a)(a)),a.onChangeStudentEmail=a.onChangeStudentEmail.bind(Object(p.a)(a)),a.onChangeStudentRollno=a.onChangeStudentRollno.bind(Object(p.a)(a)),a.onSubmit=a.onSubmit.bind(Object(p.a)(a)),a.state={name:"",email:"",rollno:""},a}return Object(m.a)(n,[{key:"onChangeStudentName",value:function(t){this.setState({name:t.target.value})}},{key:"onChangeStudentEmail",value:function(t){this.setState({email:t.target.value})}},{key:"onChangeStudentRollno",value:function(t){this.setState({rollno:t.target.value})}},{key:"onSubmit",value:function(t){t.preventDefault();var e={name:this.state.name,email:this.state.email,rollno:this.state.rollno};S.a.post("https://job-platform-fxg147.herokuapp.com/students/create-student",e).then((function(t){return console.log(t.data)})),this.setState({name:"",email:"",rollno:""})}},{key:"render",value:function(){return Object(C.jsx)("div",{className:"form-wrapper",children:Object(C.jsxs)(g.a,{onSubmit:this.onSubmit,children:[Object(C.jsxs)(g.a.Group,{controlId:"Name",children:[Object(C.jsx)(g.a.Label,{children:"Job Title"}),Object(C.jsx)(g.a.Control,{type:"text",value:this.state.name,onChange:this.onChangeStudentName})]}),Object(C.jsxs)(g.a.Group,{controlId:"Email",children:[Object(C.jsx)(g.a.Label,{children:"Contact Email"}),Object(C.jsx)(g.a.Control,{type:"email",value:this.state.email,onChange:this.onChangeStudentEmail})]}),Object(C.jsxs)(g.a.Group,{controlId:"Name",children:[Object(C.jsx)(g.a.Label,{children:"Job Description"}),Object(C.jsx)(g.a.Control,{type:"text",value:this.state.rollno,onChange:this.onChangeStudentRollno})]}),Object(C.jsx)(f.a,{variant:"danger",size:"lg",block:"block",type:"submit",className:"mt-4",children:"Post Job"})]})})}}]),n}(a.Component),y=function(t){Object(O.a)(n,t);var e=Object(x.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).onChangeStudentName=a.onChangeStudentName.bind(Object(p.a)(a)),a.onChangeStudentEmail=a.onChangeStudentEmail.bind(Object(p.a)(a)),a.onChangeStudentRollno=a.onChangeStudentRollno.bind(Object(p.a)(a)),a.onSubmit=a.onSubmit.bind(Object(p.a)(a)),a.state={name:"",email:"",rollno:""},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=this;S.a.get("https://job-platform-fxg147.herokuapp.com/students/edit-student/"+this.props.match.params.id).then((function(e){t.setState({name:e.data.name,email:e.data.email,rollno:e.data.rollno})})).catch((function(t){console.log(t)}))}},{key:"onChangeStudentName",value:function(t){this.setState({name:t.target.value})}},{key:"onChangeStudentEmail",value:function(t){this.setState({email:t.target.value})}},{key:"onChangeStudentRollno",value:function(t){this.setState({rollno:t.target.value})}},{key:"onSubmit",value:function(t){t.preventDefault();var e={name:this.state.name,email:this.state.email,rollno:this.state.rollno};S.a.put("https://job-platform-fxg147.herokuapp.com/students/update-student/"+this.props.match.params.id,e).then((function(t){console.log(t.data),console.log("Student successfully updated")})).catch((function(t){console.log(t)})),this.props.history.push("/student-list")}},{key:"render",value:function(){return Object(C.jsx)("div",{className:"form-wrapper",children:Object(C.jsxs)(g.a,{onSubmit:this.onSubmit,children:[Object(C.jsxs)(g.a.Group,{controlId:"Name",children:[Object(C.jsx)(g.a.Label,{children:"Job Title"}),Object(C.jsx)(g.a.Control,{type:"text",value:this.state.name,onChange:this.onChangeStudentName})]}),Object(C.jsxs)(g.a.Group,{controlId:"Email",children:[Object(C.jsx)(g.a.Label,{children:"Contact Email"}),Object(C.jsx)(g.a.Control,{type:"email",value:this.state.email,onChange:this.onChangeStudentEmail})]}),Object(C.jsxs)(g.a.Group,{controlId:"Name",children:[Object(C.jsx)(g.a.Label,{children:"Job Description"}),Object(C.jsx)(g.a.Control,{type:"text",value:this.state.rollno,onChange:this.onChangeStudentRollno})]}),Object(C.jsx)(f.a,{variant:"danger",size:"lg",block:"block",type:"submit",children:"Update Job Posting"})]})})}}]),n}(a.Component),N=n(62),E=function(t){Object(O.a)(n,t);var e=Object(x.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).deleteStudent=a.deleteStudent.bind(Object(p.a)(a)),a}return Object(m.a)(n,[{key:"deleteStudent",value:function(){S.a.delete("https://job-platform-fxg147.herokuapp.com/students/delete-student/"+this.props.obj._id).then((function(t){console.log("Student successfully deleted!")})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:this.props.obj.name}),Object(C.jsx)("td",{children:this.props.obj.email}),Object(C.jsx)("td",{children:this.props.obj.rollno}),Object(C.jsxs)("td",{children:[Object(C.jsx)(s.b,{className:"edit-link",path:"product/:id",to:"/edit-student/"+this.props.obj._id,children:"Edit"}),Object(C.jsx)(f.a,{onClick:this.deleteStudent,size:"sm",variant:"danger",children:"Delete"})]})]})}}]),n}(a.Component),J=function(t){Object(O.a)(n,t);var e=Object(x.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).state={students:[]},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=this;S.a.get("https://job-platform-fxg147.herokuapp.com/students/").then((function(e){t.setState({students:e.data})})).catch((function(t){console.log(t)}))}},{key:"DataTable",value:function(){return this.state.students.map((function(t,e){return Object(C.jsx)(E,{obj:t},e)}))}},{key:"render",value:function(){return Object(C.jsx)("div",{className:"table-wrapper",children:Object(C.jsxs)(N.a,{striped:!0,bordered:!0,hover:!0,children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"Job Title"}),Object(C.jsx)("th",{children:"Contact Email"}),Object(C.jsx)("th",{children:"Job Description"}),Object(C.jsx)("th",{children:"Action"})]})}),Object(C.jsx)("tbody",{children:this.DataTable()})]})})}}]),n}(a.Component);var w=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)(s.a,{children:[Object(C.jsx)("header",{className:"App-header",children:Object(C.jsx)(r.a,{bg:"primary",variant:"dark",children:Object(C.jsxs)(d.a,{children:[Object(C.jsx)(r.a.Brand,{children:Object(C.jsx)(s.b,{to:"/create-student",className:"nav-link",children:"the Dream Job"})}),Object(C.jsxs)(l.a,{className:"justify-content-end",children:[Object(C.jsx)(l.a,{children:Object(C.jsx)(s.b,{to:"/create-student",className:"nav-link",children:"Post a Job"})}),Object(C.jsx)(l.a,{children:Object(C.jsx)(s.b,{to:"/student-list",className:"nav-link",children:"Job List"})})]})]})})}),Object(C.jsx)(d.a,{children:Object(C.jsx)(u.a,{children:Object(C.jsx)(h.a,{md:12,children:Object(C.jsx)("div",{className:"wrapper",children:Object(C.jsxs)(j.c,{children:[Object(C.jsx)(j.a,{exact:!0,path:"/",component:function(t){return Object(C.jsx)(k,Object(i.a)({},t))}}),Object(C.jsx)(j.a,{exact:!0,path:"/create-student",component:function(t){return Object(C.jsx)(k,Object(i.a)({},t))}}),Object(C.jsx)(j.a,{exact:!0,path:"/edit-student/:id",component:function(t){return Object(C.jsx)(y,Object(i.a)({},t))}}),Object(C.jsx)(j.a,{exact:!0,path:"/student-list",component:function(t){return Object(C.jsx)(J,Object(i.a)({},t))}})]})})})})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(C.jsx)(s.a,{children:Object(C.jsx)(w,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},69:function(t,e,n){},71:function(t,e,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.f5e223bf.chunk.js.map