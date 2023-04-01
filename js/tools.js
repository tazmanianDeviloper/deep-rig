
/*
This function will calculate the hourly wages of divers on DSVs and their hourly wages while diving (Bottom-time).
 */
function calculate() {
    // Number of divers.
    let numberOfDivers = document.getElementById("num-of-divers").value;
    // Divers' daily compensation (w/o bottom-time).
    let depth=document.getElementById("depth").value;
    // Number of days to complete the project.
    let days=document.getElementById("work-span").value;

    // Multiplied by (12 x 40).
    document.getElementById("hourly").innerHTML =
        `>> ${numberOfDivers} x (12hrs/day x $40)
    <ul>
        <li>Based on the Occupational Safety and Health (OSH) Act of 1970.</li>
        <li>Based on U.S. Bureau of Labor Statistics (Mean Hourly Wage).</li>
    </ul>`;

    if(Number(depth)===0 || depth==null){
        document.getElementById("total-depth").innerHTML = String(Number(numberOfDivers) * 12 * 40);
        document.getElementById("total").innerHTML=String(Number(numberOfDivers) * 12 * 40 * Number(days))
    } else {
        let dailyCompWithoutDepthPay = Number(numberOfDivers) * 12 * 40;
        // %80 of the total compensation of divers should be bottom-time,
        let eighty = dailyCompWithoutDepthPay * 0.8;
        let twenty= dailyCompWithoutDepthPay * 0.2;
        console.log(dailyCompWithoutDepthPay);
        let dailyCompWithDepthPay;

        if (Number(depth)<=60){
            dailyCompWithDepthPay=eighty * .40+twenty;
        } else if (Number(depth)>60 && Number(depth)<=100){
            dailyCompWithDepthPay=eighty * .55+twenty;
        } else if(Number(depth)>100 && Number(depth)<=150){
            dailyCompWithDepthPay=eighty * 1.05+twenty;
        } else if(Number(depth)>150 && Number(depth)<=200){
            dailyCompWithDepthPay=eighty * 1.60+twenty;
        } else {
            dailyCompWithDepthPay=eighty * 2+twenty;
        }
        document.getElementById("total-depth").style.textDecoration="line-through";
        document.getElementById("total+depth").innerHTML=String(dailyCompWithDepthPay);
        document.getElementById("total").innerHTML=String(dailyCompWithDepthPay * Number(days))
        document.getElementById("depth-pay").innerHTML =
            `>> 80% of $${dailyCompWithoutDepthPay} x dept/rate + remainder is ${dailyCompWithDepthPay} . 
    <ul>
        <li>Conventionaly 80% of the paid-time should be "bottom-time", (time spent in depth).</li>
        <li>Based on Section 29.2 of the Local 56 Agreement pay increases with depth.</li>
        <li style="list-style: none">
            <ol>
                <li>dept <= 60 x .40</li>
                <li>dept > 60 x .55</li>
                <li>dept > 100 x 1.05</li>
                <li>dept > 150 x 1.60</li>
                <li>dept > 200 x 2</li>
            </ol>
        </li>
    </ul>`;
    }

}