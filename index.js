const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/generate', async (req, res) => {
  const { freelancerName, clientName, mission, price, duration, startDate } = req.body;

  const contract = `FREELANCE SERVICE AGREEMENT
═══════════════════════════════════════════

This agreement is entered into on ${startDate}

BETWEEN:
  ${freelancerName} (the "Freelancer")
AND:
  ${clientName} (the "Client")

═══════════════════════════════════════════
1. SERVICES
═══════════════════════════════════════════

The Freelancer agrees to provide the following services:
${mission}

═══════════════════════════════════════════
2. TIMELINE
═══════════════════════════════════════════

Start date: ${startDate}
Duration: ${duration}

═══════════════════════════════════════════
3. PAYMENT
═══════════════════════════════════════════

Total amount: $${price} AUD
- 50% deposit due before work begins: $${Math.round(price / 2)} AUD
- 50% balance due upon completion: $${Math.round(price / 2)} AUD

Payment method: Bank transfer or agreed method.
Late payments incur a 5% fee after 14 days.

═══════════════════════════════════════════
4. REVISIONS
═══════════════════════════════════════════

This agreement includes up to 2 rounds of revisions.
Additional revisions will be quoted separately.

═══════════════════════════════════════════
5. OWNERSHIP
═══════════════════════════════════════════

All deliverables become property of the Client
upon receipt of full payment.

═══════════════════════════════════════════
6. TERMINATION
═══════════════════════════════════════════

Either party may terminate this agreement with
7 days written notice. Work completed to date
will be invoiced accordingly.

═══════════════════════════════════════════
7. CONFIDENTIALITY
═══════════════════════════════════════════

Both parties agree to keep all project details
and information confidential.

═══════════════════════════════════════════
SIGNATURES
═══════════════════════════════════════════

Freelancer: ${freelancerName}
Signature: ___________________________
Date: _______________

Client: ${clientName}
Signature: ___________________________
Date: _______________`;

  res.json({ contract });
});

module.exports = app;