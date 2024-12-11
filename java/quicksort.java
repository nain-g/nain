public class quicksort {
    static int partition(int A[], int low, int high)
{
    int pivot = A[low];
    int i = low + 1;
    int j = high;
    int temp;

    do
    {
        while (A[i] <= pivot)
        {
            i++;
        }

        while (A[j] > pivot)
        {
            j--;
        }

        if (i < j)
        {
            temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
    } while (i < j);
    temp = A[low];
    A[low] = A[j];
    A[j] = temp;
    return j;
}
    static void qsort(int A[], int low, int high)
{
    int partitionIndex; 

    if (low < high)
    {
        partitionIndex = partition(A, low, high); 
        qsort(A, low, partitionIndex - 1);   
        qsort(A, partitionIndex + 1, high); 
    }
}
    public static void main(String[] args)
	{
		int arr[] = { 5,4,7,3,2,7,8,1 };
		qsort(arr,0,7);
        for(int i=0;i<arr.length;i++)
        System.out.print(arr[i]+" ");
	}
}
