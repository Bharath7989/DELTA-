public class prime{
    public static void main(String[] args) {
        System.out.println("This is all about prime number.");
        int i=0,j=1;
        int prime=0;
        for(i=1;i<50;i++){
            prime=0;
            for(j=1; j<=i; j++){
            if(i%j==0){
                prime++;
            }
          }
           if(prime==2){
            System.out.println(i);
        }
        }
         
    }
}