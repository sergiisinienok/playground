// Cost model
// | algorithm  | initialize | union | find |
// | quick-find |   N        |  N    |  1   |
class QuickFindUF {
    constructor (N) {
        this.id = [N];
        for (let i = 0; i < N; i++)
            this.id[i] = i;
    };

    connected (p, q) {
        return this.id[p] == this.id[q];
    };

    union (p, q) {
        const pid = this.id[p];
        const qid = this.id[q];

        for (let i = 0; i < this.id.length; i++)
            if (this.id[i] == pid)
                this.id[i] = qid;
    };
};

// Cost model
// | algorithm   | initialize | union | find |
// | quick-union |   N        |  N    |  N   |
class QuickUnionUF {
    constructor (N) {
        this.id = [N];
        for (let i = 0; i < N; i++)
            this.id[i] = i;
    };

    root(i) {
        while (i != this.id[i]) {
            i = this.id[i];
        }

        return i;
    };

    connected (p, q) {
        return this.root(p) == this.root(q);
    };

    union (p, q) {
        const i = this.root(p);
        const j = this.root(q);
        this.id[i] = j;
    };
};

// Cost model
// | algorithm              | initialize | union    | find      |
// | weighted-quick-union   |   N        |  lg N    | lg N      |
class WeightedQuickUnionUF {
    constructor (N) {
        this.id = [N];
        this.treeSizes = [N];
        for (let i = 0; i < N; i++) {
            this.id[i] = i;
            this.treeSizes[i] = 1; // All elements of this.id are in fact its own trees with the size of 1;
        }
    };

    root(i) {
        while (i != this.id[i]) {
            i = this.id[i];
        }

        return i;
    };

    connected (p, q) {
        return this.root(p) == this.root(q);
    };

    union (p, q) {
        const i = this.root(p);
        const j = this.root(q);

        if (i === j) return;

        if (this.treeSizes[i] < this.treeSizes[j]) {
            this.id[i] = j;
            this.treeSizes[j] += this.treeSizes[i];
        } else {
            this.id[j] = i;
            this.treeSizes[i] += this.treeSizes[j];
        }
    };
};

// Cost model
// | algorithm              | initialize | union        | find       |
// | weighted-quick-union   |   N        |  lg* N       | lg* N      |
class WeightedQuickUnionWithPathCompressionUF {
    constructor (N) {
        this.id = [N];
        this.treeSizes = [N];
        for (let i = 0; i < N; i++) {
            this.id[i] = i;
            this.treeSizes[i] = 1; // All elements of this.id are in fact its own trees with the size of 1;
        }
    };

    root(i) {
        while (i != this.id[i]) {
            this.id[i] = this.id[this.id[i]];
            i = this.id[i];
        }

        return i;
    };

    connected (p, q) {
        return this.root(p) == this.root(q);
    };

    union (p, q) {
        const i = this.root(p);
        const j = this.root(q);

        if (i === j) return;

        if (this.treeSizes[i] < this.treeSizes[j]) {
            this.id[i] = j;
            this.treeSizes[j] += this.treeSizes[i];
        } else {
            this.id[j] = i;
            this.treeSizes[i] += this.treeSizes[j];
        }
    };
};

module.exports = {
    QuickFindUF,
    QuickUnionUF,
    WeightedQuickUnionUF,
    WeightedQuickUnionWithPathCompressionUF,
};