function calculateNetto()
{
        num1 = document.getElementById("sallBrutto").value;
        num2 = document.getElementById("calculateChildren").value;
        num3 = 100;
        num4 = 22;
        num5 = 67.6;
        document.getElementById("result").innerHTML = num5 * (num1 / num3) + (num4 * num2);
}
