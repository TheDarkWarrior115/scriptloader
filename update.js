if(localStorage.getItem("update")){if(localStorage.getItem("update")==="v1"){
			alert("No New Update");
		}else{localStorage.clear();location.reload()}
	}else{localStorage.setItem("update","v1")}
