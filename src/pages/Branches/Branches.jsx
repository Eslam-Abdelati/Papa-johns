import React, { useState } from "react";

export default function Branches() {
  const [selectedBranch, setSelectedBranch] = useState("");

  const branches = [
    "أكتوبر",
    "الإسكندرية",
    "التجمع",
    "الدقي",
    "الرحاب",
    "الساحل الشمالي",
    "الشروق",
    "العبور",
    "المعادي",
    "المنصورة",
  ];

  const branchDetails = {
    أكتوبر: ["أكتوبر  ", " الحصري", " امريكانا بلازا", "داندي مول", "دولفين"],
    الإسكندرية: ["محطة الرمل", "سموحة", "العجمي"],
    التجمع: ["التجمع الأول", "التجمع الخامس", "ميديكال بارك"],
    الدقي: ["شارع التحرير", "المهندسين", "الميدان"],
    الرحاب: ["بوابة 6", "بوابة 9", "بوابة 13"],
    "الساحل الشمالي": ["قرية مراسي", "هاسيندا", "بو ساندز"],
    الشروق: ["الشروق 1", "الشروق 2", "الشروق 3"],
    العبور: ["العبور سيتي", "جولف سيتي", "هايبر"],
    المعادي: ["المعادي كورنيش", "زهراء المعادي", "المعادى الجديدة"],
    المنصورة: ["شارع الجمهورية", "حي الجامعة", "المشاية"],
  };

  return (
    <div className="container mt-4 text-center">
      {/* ✅ الهيدر */}
      <h2 className="mb-4">فروعنا {selectedBranch && `- ${selectedBranch}`}</h2>

      {/* ✅ Select */}
      <select
        className="form-select w-50 mx-auto mb-4"
        value={selectedBranch}
        onChange={(e) => setSelectedBranch(e.target.value)}
      >
        <option value="">-- اختر الفرع --</option>
        {branches.map((branch, index) => (
          <option key={index} value={branch}>
            {branch}
          </option>
        ))}
      </select>

      {/* ✅ عرض الفروع المتاحة */}
      {selectedBranch && (
        <div
          className="d-flex flex-wrap justify-content-center gap-3"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {branchDetails[selectedBranch].map((subBranch, index) => (
            <div
              key={index}
              className="border rounded p-3"
              style={{
                flex: "1 1 calc(33.33% - 1rem)",
                minWidth: "250px",
                maxWidth: "350px",
                backgroundColor: "#F5E8DC",
              }}
            >
              <h5>{subBranch}</h5>
              <p className="mb-0">عنوان {subBranch} بالتفصيل</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
