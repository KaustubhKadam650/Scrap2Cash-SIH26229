# Datasets – Scrap2Cash (SIH26229)

## How the data was collected

We conducted **field research** with **2 informal scrap collectors** and **1 small aggregator** in the **Bhusawal–Jalgaon region (Maharashtra)** during September 2026.

### Field Process:
1. Visited local kabadiwalas and recorded the materials they commonly collect (PCB, copper cable, lead-acid batteries, LCD panels, motors, magnet assemblies, mixed plastics, CRTs etc.).
2. Noted the buying prices they were receiving from different buyers/recyclers on different days and locations.
3. Recorded approximate weight, condition of material, source type (household / shop / industrial / street), and payment mode (cash / pending / paid).
4. Collected authorization details of nearby formal recyclers (EPR registration numbers, materials they accept, pickup availability, service area).
5. Created digital lots and simulated traceable handovers based on real conversations with the collectors.

### Collector Profiles (Anonymized):
- **COL-7842** – Operating mainly in Bhusawal (preferred language: Marathi)
- **COL-9103** – Operating in Jalgaon area (preferred language: Hindi)

All personal names and phone numbers of collectors have been removed. Only Collector IDs are used.

---

## Dataset Files

| File | Description | Rows |
|------|-------------|------|
| `material_dataset.xlsx` | Digital lots of collected materials | 10 |
| `price_dataset.xlsx` | Historical + current buying prices by material & location | 13 |
| `recycler_dataset.xlsx` | Authorized recyclers with rates, EPR status & service area | 6 |
| `transaction_dataset.xlsx` | Traceable handover records (lot → recycler → payment) | 7 |

### How these datasets are used in the prototype:
- **Instant value estimation** → uses price_dataset
- **Smart recycler matching** → uses recycler_dataset + material category + location
- **Traceability & digital handover** → uses material_dataset + transaction_dataset
- **Earnings ledger** → uses transaction_dataset
- **Price board with trends** → uses price_dataset

This data supports the core goal of the problem statement: making the formal recycling channel economically attractive and convenient for informal collectors.
