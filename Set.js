const arr = new Set(["services", "foods", "elections", "auto"]);

const categories = new Set(arr);

const nums1 = [1, 2, 1, 1, 1, 1, 2, 3, 13, 1, 33];
const nums2 = [1, 2, 13, 14, 66, 18, 2, 1, 1, 1, 1, 2, 3, 13, 1, 33];

const unique = [...new Set([...nums1, ...nums2])];
