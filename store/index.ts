import { getCoinsInfo } from '@/api/coins';
import { ICoinData, ICoinPairData } from '@/types/coins';
import { action, makeAutoObservable, runInAction } from 'mobx';
import { debounce } from '@/utils/debounce';

export class RootStore {
  coins: ICoinData[] = [];
  searchQuery: string = '';
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCoinsInfo = async () => {
    try {
      const coinsData = await getCoinsInfo();

      runInAction(() => {
        this.coins = coinsData;
      });
    } catch (error) {
      console.error('Error fetching crypto data:', error);

      runInAction(() => {
        this.error = 'some user friendly error message';
      });
    }
  };

  get filteredCoins() {
    if (!this.searchQuery) {
      return this.coins;
    }

    return this.coins.filter((coin) =>
      coin.crypto.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  setSearchQuery = debounce((value: string) => {
    // need this to run in action because mobx doesn't support async actions
    runInAction(() => {
      this.searchQuery = value;
    });
  }, 500);

  setError = (error: string) => {
    this.error = error;
  };

  getCoinDataByTicker = (ticker: string) => {
    const pair = this.coins.find((coin) => coin.crypto === ticker);

    if (!pair) {
      return null;
    }

    return pair;
  };
}

export const rootStore = new RootStore();
