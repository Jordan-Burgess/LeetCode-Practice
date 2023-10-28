/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(let i=0; i<n; i++){
        for(let j=0; j<m+n; j++){
            if(nums2[i] < nums1[j] || j == m+i){
                nums1.splice(j, 0, nums2[i])
                nums1.pop()
                break
            }
        }
    }
};
