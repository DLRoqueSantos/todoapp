(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(12)},12:function(e,t,a){"use strict";a.r(t);var n=a(8),o=a(10),c=a(1),l=a(2),s=a(3),i=a(5),r=a(4),d=a(6),u=a(0),m=a.n(u),p=a(9),h=a.n(p);a(17);function f(e){return m.a.createElement("li",null,m.a.createElement("input",{type:"checkbox",onChange:e.onChange}),m.a.createElement("label",{style:{textDecoration:e.todo.complete?"line-through":""}},e.todo.cat),m.a.createElement("label",{style:{textDecoration:e.todo.complete?"line-through":""}},e.todo.desc),m.a.createElement("button",{onClick:e.deleteTask,className:"delete"},"Delete"))}var b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(o)))).state={id:11,cat:"",desc:""},a.handleChange=function(e){console.log(e),a.setState(Object(c.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.state.cat&&(a.setState({id:a.state.id+1}),a.props.onSubmit({id:a.state.id,cat:a.state.cat,desc:a.state.desc,complete:!1}),a.setState({cat:"",desc:""}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return m.a.createElement("form",{onSubmit:this.handleSubmit},m.a.createElement("div",{className:"Input"},m.a.createElement("input",{id:"inputCat",className:"Input-text",name:"cat",value:this.state.cat,onChange:this.handleChange,placeholder:"Task Category"}),m.a.createElement("label",{for:"inputCat",className:"Input-label"},"Category")),m.a.createElement("div",{className:"Input"},m.a.createElement("input",{id:"inputDesc",className:"Input-text",name:"desc",value:this.state.desc,onChange:this.handleChange,placeholder:"Task Description"}),m.a.createElement("label",{for:"inputDesc",className:"Input-label"},"Description")),m.a.createElement("button",{onClick:this.handleSubmit},"Add"))}}]),t}(m.a.Component),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var c=arguments.length,s=new Array(c),d=0;d<c;d++)s[d]=arguments[d];return(a=Object(i.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(s)))).state={todos:[{id:0,cat:"Web",desc:"Study for the Quiz",complete:!1},{id:1,cat:"Portfolio",desc:"Perfect personal logo",complete:!1},{id:2,cat:"Portfolio",desc:"Hard code personal portfolio using React",complete:!1},{id:3,cat:"Portfolio",desc:"Select best portfolio pieces",complete:!1},{id:4,cat:"Resume",desc:"Update Resume",complete:!1},{id:5,cat:"Project Management",desc:"Study for Quiz on Friday",complete:!1},{id:6,cat:"Carrer Planning",desc:"Create a quotation, cover letter, pitch for building Website",complete:!1},{id:7,cat:"NextGenDinner",desc:"Pick date for interview",complete:!1},{id:8,cat:"Website",desc:"Have website ready to present in NGD interview",complete:!1},{id:9,cat:"Internship",desc:"Jam3, find more companies like them",complete:!1},{id:10,cat:"UX Class",desc:"Read Netflix case study and come with a discussion question",complete:!1}]},a.addTodo=function(e){a.setState({todos:[e].concat(Object(o.a)(a.state.todos))})},a.toogleComplete=function(e){a.setState({todos:a.state.todos.map(function(t){return console.log(t.id),t.id===e?Object(n.a)({},t,{complete:!t.complete}):t})})},a.deleteTask=function(e){console.log("delete this"+e),a.setState({todos:a.state.todos.filter(function(t){return t.id!==e})})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"CompleteMessage",value:function(e){return e<=0?"All tasks are completed. Good Job!":"Tasks Remaining: ".concat(e)}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement("h1",{className:"title"},"To-Do List"),m.a.createElement(b,{onSubmit:this.addTodo}),m.a.createElement("div",{className:"wrapper"},m.a.createElement("ul",{className:"task-row"},this.state.todos.map(function(t){return m.a.createElement(f,{key:t.id,onChange:function(){return e.toogleComplete(t.id)},deleteTask:function(){return e.deleteTask(t.id)},todo:t})}))),m.a.createElement("h3",null,this.CompleteMessage(this.state.todos.filter(function(e){return!e.complete}).length)))}}]),t}(m.a.Component);h.a.render(m.a.createElement(g,null),document.getElementById("root"))},17:function(e,t,a){}},[[11,2,1]]]);
//# sourceMappingURL=main.ce95ba4b.chunk.js.map