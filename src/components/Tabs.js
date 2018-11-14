import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react'
import Tab from './Tab'
import TabContent from './TabContent'


class Tabs extends Component {
  static propType = {
    children: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
       activeTab: this.props.children[0].props.children[0].props.src
    };
  }
  

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className="tabs">
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <ol className="tab-list">
                {children.map((child) => {
                  return (
                    <Tab
                      activeTab={activeTab}
                      key={child.key}
                      onClick={onClickTabItem}
                      urlImg={child.props.children[0].props.src}
                      bgClass={child.props.className}
                    />
                  );
                })}
            </ol>
            </Grid.Column>
            <Grid.Column width={12} className="border-left">
              <div className="tab-content">
                {children.map((child) => {
                  if (child.props.children[0].props.src !== activeTab) return undefined;
                  return (
                    <div key={child.key}>
                      <TabContent 
                        title={child.props.children[2].props.children}
                        sale={child.props.children[3].props.children}
                        price={child.props.children[4].props.children}
                        proType={child.props.children[5].props.children}
                        proVendor={child.props.children[6].props.children}
                        quanlity={child.props.children[7].props.children}
                        img={child.props.children[1].props.src}
                      />
                    </div>
                  )
                })}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    )
  }
}

export default Tabs
