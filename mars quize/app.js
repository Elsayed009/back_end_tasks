// ✅ الحل - Atomic Update مع MongoDB
const product = await Product.findOneAndUpdate(
  {
    _id: productId,
    stock: { $gte: quantity }  // الشرط والـ update في نفس الوقت
  },
  {
    $inc: { stock: -quantity }  // atomic decrement
  },
  {
    new: true,        // يرجع الـ document بعد التعديل
    runValidators: true
  }
);

// لو product = null يبقى الـ stock ماكانش كافي
if (!product) {
  return res.status(400).json({ msg: "Not enough stock" });
}

res.json({ msg: "Order placed successfully", product });
```

### ليه ده بيحل المشكلة؟

| | الكود القديم | الحل الجديد |
|---|---|---|
| **الخطوات** | قراءة → check → كتابة (3 خطوات) | عملية واحدة atomic |
| **Race Condition** | ممكن يحصل | مستحيل |
| **الضمان** | لا يوجد | قاعدة البيانات بتضمنه |

### كيف بيشتغل؟
```
User A ──► findOneAndUpdate(stock >= 1) ──► نجح  → stock = 0
User B ──► findOneAndUpdate(stock >= 1) ──► فشل  → product = null → 400 Error