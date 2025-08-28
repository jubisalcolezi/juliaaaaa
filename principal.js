var pacientes = document.querySelector(".subtitulo");
			pacientes.textContent = "Meus Pacientes";
			var marca = document.querySelector(".titulo");
			marca.textContent = "Julia Nutrition";

            //acessar a tag TR -> paciente Paulo
            var paciente = document.querySelector('#primeiro');
            //selecionou o conteudo da tag
            var tdPeso = paciente.querySelector(".info-peso");
            var peso = tdPeso.textContent;
            console.log(peso);

            var tdAltura = paciente.querySelector(".info-altura");
            var altura = tdAltura.textContent;
            console.log(altura);

            var imc = peso / (altura * altura);
            console.log(imc);
            var tdImc = paciente.querySelector(".info-imc");
            tdImc.textContent = imc;

            if(peso < 0 || peso > 1000){
                alert("peso invalido");
            }
            if(altura < 0 || altura > 3.00){
                alert("altura invalida");
            }
            