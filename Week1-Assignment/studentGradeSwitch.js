function studentGrade(score)
{
    
switch(true)
{

    case score>80:
        console.log("Student Grade is A");
        break;
    case score<80:
        console.log("Student Grade is B");
        break;
    case score=100:
        console.log("Student Grade is Excellent");
        break;

    default:
        console.log("By Default Student Grade is D");
        break;

}

}
studentGrade(100)