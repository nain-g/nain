import java.util.*;
public class p {
    public static int minSubarray(int[] nums, int p) {
        int n = nums.length;
        long sum = 0;
        for (int num : nums) {
            sum += num;
        }        
        long remainder = sum % p;
        if (remainder == 0) return 0; 
        HashMap<Long, Integer> prefixModMap = new HashMap<>();
        prefixModMap.put(0L, -1);
        long prefixSum = 0;
        int minLength = n;
        for (int i = 0; i < n; i++) {
            prefixSum += nums[i];
            long currentMod = prefixSum % p;
            long targetMod = (currentMod - remainder + p) % p;
            if (prefixModMap.containsKey(targetMod)) {
                minLength = Math.min(minLength, i - prefixModMap.get(targetMod));
            }
            prefixModMap.put(currentMod, i);
        }        
        for(Map.Entry<Long,Integer> e:prefixModMap.entrySet() ){
            System.out.println(e.getKey() +"  "+e.getValue());
        }
        return minLength == n ? -1 : minLength;
    }
     public static void main(String[] args){
        int[] ar={3,1,4,2};
        int r=minSubarray(ar,6);
        System.out.print(r);
        System.out.println("hello");
        System.out.print("world");
     }
}
