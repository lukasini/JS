function calculateNetto()
{
        num1 = document.getElementById("sallBrutto").value;
        num2 = document.getElementById("calculateChildren").value;
        num3 = 100;
        document.getElementById("result").innerHTML = (num1 / num3) * num2;
}
