interface CommitType {
  sha: string;
  url: string;
  protected: boolean;
}

export interface BranchType {
  name: string;
  commit: CommitType;
}

export interface BranchInfo {
  name: BranchType['name'];
  sha: CommitType['sha'];
}
