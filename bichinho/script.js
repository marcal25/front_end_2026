        const petImg = document.getElementById("petImg");
        const avatarImg = document.getElementById("avatarImg");
        const barraFome = document.getElementById("barraFome");
        const labelCiclo = document.getElementById("labelCiclo");

        const estados = {
            normal: "b_n.png",
            puto: "b_p.png",
            morto: "b_d.png",
            comendo: "b_c.png",
            alimentado: "b_a.png"
        };

        const fundos = {
            dia: "bg.png",
            noite: "noite.jpeg"
        };

        let contadorFome = 0;
        let tempoAlimentando = null;
        let horas = 8; // Começa de dia

        function controladorFome() {
            setInterval(() => {
                if (contadorFome < 60) {
                    contadorFome++;
                    
                    // Atualiza barra de progresso (visual)
                    barraFome.value = 100 - (contadorFome * 1.66);

                    // Troca de imagens baseada na fome
                    if (contadorFome >= 60) {
                        petImg.src = estados.morto;
                    } else if (contadorFome >= 30) {
                        petImg.src = estados.puto;
                    }
                }
            }, 1000);
        }

        function alimentar() {

            if (contadorFome >= 60) {
                alert("😭 É tarde demais... seu pet se foi.");
                return;
            }

            console.log("Comendo...");
            contadorFome = 0;
            barraFome.value = 100;
            
            petImg.src = estados.comendo;
            avatarImg.src = estados.comendo;

            if (tempoAlimentando) clearTimeout(tempoAlimentando);

            tempoAlimentando = setTimeout(() => {
                petImg.src = estados.alimentado;
                avatarImg.src = estados.normal;

                setTimeout(() => {
                    if (contadorFome < 30) petImg.src = estados.normal;
                }, 2000);
            }, 1000);
        }

        function aplicarFundo() {
            const body = document.body;
            // Noite entre 18h e 6h
            if (horas >= 18 || horas < 6) {
                body.style.backgroundImage = `url('${fundos.noite}')`;
                body.classList.add("bg-slate-900");
                labelCiclo.innerText = "Noite 🌙";
                labelCiclo.classList.add("text-white");
            } else {
                body.style.backgroundImage = `url('${fundos.dia}')`;
                body.classList.remove("bg-slate-900");
                labelCiclo.innerText = "Dia ☀️";
                labelCiclo.classList.remove("text-white");
            }
        }

        function atualizarRelogioAutomatico() {
            setInterval(() => {
                horas++;
                if (horas >= 24) horas = 0;
                aplicarFundo();
                console.log("Hora atual:", horas);
            }, 10000); // Cada 10 segundos passa 1 hora no jogo
        }

        function alternarCicloManual() {
            const isChecked = document.getElementById("toggleClima").checked;
            // Se marcado (toggle ON) -> Noite (18h)
            // Se desmarcado (toggle OFF) -> Dia (8h)
            horas = isChecked ? 18 : 8;
            aplicarFundo();
        }

        // INICIALIZAÇÃO
        controladorFome();
        atualizarRelogioAutomatico();
        aplicarFundo();

    </script>
</body>
</html>