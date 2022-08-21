(() => {
    const cnv = document.querySelector('canvas');
    const ctx = cnv.getContext('2d');

    function init() {
        // cnv.width = innerWidth;
        cnv.width = 900;
        cnv.height = innerHeight;
    }
    init();

    const numberOfRings = 10;
    const ringRadiusOffset = 3;
    const ringRadius = 100;
    const waveOffset = 10;
    const colors = ['#FC0'];
    let startAngle = 0;

    function updateRings() {
        for (let i = 0; i < numberOfRings; i++) {
            let radius = i * ringRadiusOffset + ringRadius;
            let offsetAngle = i * waveOffset * Math.PI / 180;
            drawRing(radius, colors[i], offsetAngle);
        }

        startAngle >= 360? startAngle = 0 : startAngle++;
    }

    let centerX = cnv.width / 2;
    let centerY = cnv.height / 2;

    const maxWavesAmplitude = 5;
    const numberOfWaves = 20;


    function drawRing(radius, color, offsetAngle) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;

        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;

        ctx.beginPath();

        for (let j = -180; j < 180; j++) {
            let currentAngle = (j + startAngle) * Math.PI / 180;
            let displacement = 0;
            let now = Math.abs(j);

            if (now > 70) {
                displacement = (now - 70) / 70;
            }

            if (displacement >= 1) {
                displacement = 1;
            }

            let waveAmplitude = radius + displacement * Math.sin((currentAngle + offsetAngle) * numberOfWaves) * maxWavesAmplitude;
            let x = centerX + Math.cos(currentAngle) * waveAmplitude;
            let y = centerY + Math.sin(currentAngle) * waveAmplitude;
            j > -180? ctx.lineTo(x, y) : ctx.moveTo(x, y);
            
        }
        ctx.closePath();
        ctx.stroke();
    }

    function loop() {
        cnv.width |= 0; //ctx.clearRect(0, 0, cnv.width, cnv.height);
        updateRings();
        requestAnimationFrame(loop);
    }
    loop();

    window.addEventListener('resize', init);

})();